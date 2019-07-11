<?php
/*
Plugin Name: Mail Crypter
Description: Secures your mail addresses from spam bots. Use the [mail-crypt] shortcode to add encrypted mailaddresses to your page
Author: wilka_2000
Author URI: https://github.com/mc17uulm/wp-mail-crypter
Version: 3.0
Text Domain: mc_language
Domain Path: /lang
License: GPLv3
Licence URI: http://www.gnu.org/licenses/gpl-3.0.txt
Tags: mail, security, encryption, spam, email, secure, encrypt, protect

=== Plugin Information ===

Version: 3.0
Date: 11.07.2019
If there are problems, bugs or errors, please report on github: https://github.com/mc17uulm/wp-mail-crypter

 */

require_once __DIR__ . '/vendor/autoload.php'; 

use MailCrypter\AdminPage;

function mc_activate(){
	wp_enqueue_script("Mail-Crypter.js", plugin_dir_url(__FILE__) . 'js/mail-crypter.js', array(), null, true);
}

function mc_admin_activate(){
    wp_enqueue_script("mail_crypter_backend_script", plugin_dir_url(__FILE__) . 'js/mail_crypter_admin.js', array(), null, true);
    wp_localize_script('mail_crypter_backend_script', 'mail_crypter_ajax', array( 'ajax_url' => admin_url('admin-ajax.php')));
}

function mc_load_plugin_textdomain()
{
    load_plugin_textdomain('mc_language', FALSE, basename(dirname(__FILE__)) . '/lang/');
}

function mc_char_at($str, $pos){
    return ord($str[$pos]);
}

function mc_encrypt_to_ascii($text){

	$encrypted = "";
	for($i = 0; $i < strlen($text); $i++){
		$encrypted = $encrypted . "&#" . mc_char_at($text, $i) . ";";
	}

	return $encrypted;
}

function mc_encrypt_to_js($text)
{
	$tmp = "";
	for($i = 0; $i < strlen($text); $i++){
		$tmp .= chr(mc_char_at($text, $i)+2);
	}

	return $tmp;
}

function mc_create_ascii_html_tag($mail, $text)
{
	switch(empty($text))
	{
		case true:
			return "<a href ='" . mc_encrypt_to_ascii("mailto:" . $mail) . "'>" . mc_encrypt_to_ascii($mail) . "</a>";
		case false:
			return "<a href ='" . mc_encrypt_to_ascii("mailto:" . $mail) . "'>" . mc_encrypt_to_ascii($text) . "</a>";	
	}

}

function mc_create_js_html_tag($mail, $text)
{
	switch(empty($text))
	{
		case true:
			return "<a href='#' name='mail-encrypt-href' value='" . mc_encrypt_to_js($mail) . "'>" . mc_encrypt_to_js($mail) . "</a>";
		case false:
			return "<a href='#' name='mail-encrypt-href' value='" . mc_encrypt_to_js($mail) . "'>" . mc_encrypt_to_js($text) . "</a>";
	}
}

function mc_shortcode($atts)
{

	$atts = shortcode_atts(array( 'mail' => '', 'text' => '', 'js' => ''), $atts, 'mail_crypt');
	
	if(empty($atts['mail'])){
		return "<strong>Error:</strong> [mail_crypter] shortcode arguments are invalid";
	}
	
	if(empty($atts['js']) || $atts['js'] === "false")
	{
		return mc_create_ascii_html_tag($atts['mail'], $atts['text']);
	} else {
		return mc_create_js_html_tag($atts['mail'], $atts['text']);
	}
}

function mc_option_page() {
	AdminPage::render();
}

function mc_option_page_old(){ ?>
	<div class="wrap">
        <h1>Mail Crypter <small><small>Version 3.0</small></small></h1>
		<p><?= __('Encrypt your email address directly. With or without <code>a href</code> tag', 'mc_language') ?><br /></p>
		<form id="mc_form">
			<fieldset class="form-group">
					<label><?= __('Email address', 'mc_language') ?>:</label>
			    	<input type="email" name="mc_email" class="form-control" required="true" placeholder="<?= __('Email', 'mc_language') ?>">
				</fieldset>
				<fieldset class="form-group">
					<label class="radio-inline"><input checked type="radio" name="tag" value="1"><?= __('with <code>a href</code> tag', 'mc_language') ?></label>
					<label class="radio-inline"><input type="radio" name="tag" value="0"><?= __('only email', 'mc_language') ?></label>
				</fieldset>
				<fieldset class="form-group">
					<button type="button" id="mc_submit_btn" class="btn btn-success pull-right"><?= __('Encrypt', 'mc_language') ?></button>
				</fieldset>
			</form>
			<form>
				<fieldset class="form-group">
					<label><?= __('Output', 'mc_language') ?>:</label>
					<textarea id="mc_output" name="mc_output" class="form-control" rows="5"></textarea>
				</fieldset>
				<fieldset class="form-group">
					<label><?= __('In page', 'mc_language') ?>:</label>
					<p>
						<span id="mc_post"></span>
					</p>
                </fieldset>
                <fieldset>
                    <label><?= __('Sourcecode', 'mc_language') ?>:</label>
                    <p>
                        <pre id="mc_source"></pre>
                    </p>
                </fieldset>
			</form>
		</div>
<?php
}


function mc_ajax_request()
{
    switch($_POST["type"])
    {
        case 1:
            die(mc_create_ascii_html_tag($_POST["email"], $_POST["email"]));
        default:
            die(mc_encrypt_to_ascii($_POST["email"]));
    }

}

function mc_add_menu(){
    $page = add_menu_page('Mail Crypter', 'Mail Crypter', "manage_options", "mail-crypter", "mc_option_page", "dashicons-admin-network");
    add_action('load-' . $page, "mc_load_admin_assets");
}

function mc_load_admin_assets()
{
    add_action('admin_enqueue_scripts', "mc_admin_activate");
}

function mc_mce_button() {
    if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) ) {
        return;
    }
    if ( 'true' == get_user_option( 'rich_editing' ) ) {
        add_filter( 'mce_external_plugins', 'mc_tinymce_plugin' );
        add_filter( 'mce_buttons', 'mc_register_mce_button' );
    }
}

function mc_tinymce_plugin($plugin_array) {
    add_filter('mce_external_languages', 'mc_tinymce_lang');
    $plugin_array['mc_mce_button'] = plugin_dir_url(__FILE__) .'js/mc_editor.js';
    return $plugin_array;
}

function mc_register_mce_button($buttons) {
    array_push( $buttons, 'mc_mce_button' );
    return $buttons;
}

function mc_tinymce_lang($locales)
{
    $locales["mc"] = plugin_dir_path(__FILE__) . 'lang/mc_mce_locale.php';
    return $locales;
}

add_action('wp_enqueue_scripts', 'mc_activate');
add_action('plugins_loaded', 'mc_load_plugin_textdomain');
add_shortcode('mail_crypt', 'mc_shortcode');
add_action('admin_head', 'mc_mce_button');
add_action('admin_menu', 'mc_add_menu');
add_action('wp_ajax_nopriv_mc_encrypt', "mc_ajax_request");
add_action('wp_ajax_mc_encrypt', "mc_ajax_request");
?>
