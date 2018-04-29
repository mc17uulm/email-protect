<?php
/*
Plugin Name: Mail Crypter
Description: Mit diesem Plugin könnt ihr eure E-Mail-Adressen vor dem auslesen druch Spam-Bots schützen. Mit dem Shorttag <b>[mail-crypter]</b> könnt ihr ganz bequem eine verschlüsselte E-Mail-Adresse in eurer Wordpress-Seite einbauen.
Author: wilka_2000
Version: 1.0
License: GPLv3

=== License Information ===

Mail Crypter is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.

Mail Crypter is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Mail Crypter. If not, see http://www.gnu.org/licenses/gpl-3.0.html.

=== Plugin Information ===

Version: 1.0
Date: 08.03.2017
Sollte es Probleme, Fehler oder Anmerkungen zu diesem Plugin geben, so kontaktieren Sie mich bitte unter: marco[dot]combosch[at]uni-ulm[dot]de

 */

 function mail_crypter_activate(){
	 wp_enqueue_script("Mail-Crypter-Script", (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/wp-content/plugins/mail-crypter/mail-crypter-script.min.js', array(), null, true);
 }

 add_action( 'wp_enqueue_scripts', 'mail_crypter_activate' );

/*
 * Dieser Funktion wird ein String und die Position eines einzelnen Buchstabens übergeben.
 * Zurückgegeben wird eine Nummer, welche den ascii-Code des einzelnen Buchstabens repräsentiert.
 */
function mail_crypter_char_at($str, $pos){
	return ord($str{$pos});
}

/*
 * In dieser Funktion wird der übergebene String (in diesem Fall, entweder die E-Mail-Adresse oder der Link Text) Buchstabe
 * für Buchstabe in die Ascii-Nummer konvertiert. Außerdem werden die konvertierten Buchstaben so geändert, dass sie durch den
 * Browser gelesen werden können und so für den Nutzer darstellbar sind.
 *
 * Spam-Bots hingegen, welche die E-Mail-Adressen von Websites abgreifen wollen, sehen nur den nichtssagenden Ascii-Code und interpretieren
 * diesen nicht als E-Mail-Adresse.
 */
function mail_crypter_crypt_mail($mail){

	$crypted = "";

	for($i = 0; $i < strlen($mail); $i++){

		// Für jeden einzelnen Buchstaben des eingegebenen Strings wird durch die char_at Methode verschl�sselt
		$crypted = $crypted . "&#" . mail_crypter_char_at($mail, $i) . ";";
	}
	return $crypted;
}

/*
 * Hier wird der komplette HTML-tag zusammengesetzt, welcher dann den Shortcode ersetzt.
 */
function mail_crypter_add_href($mail, $text){

	// Die Bestandteile des Links
	$href_begin = "<a href ='";
	$href_middle = "'>";
	$href_end = "</a>";

	$mailto = "mailto:";

	// Auch "mailto:" wird mit verschlüsselt, um jeden Hinweis auf eine E-Mail-Adresse auszuschließen.
	$pre_crypted = $mailto . $mail;

	// Der komplette Text, mit verschlüsselter E-Mail und Linktext werden zusammengefasst und zurückgegeben.
	$crypted = $href_begin . mail_crypter_crypt_mail($pre_crypted) . $href_middle . mail_crypter_crypt_mail($text) . $href_end;
	return $crypted;
}

function mail_crypter_js_crypt($text){
	$tmp = "";
	for($i = 0; $i < strlen($text); $i++){
		$tmp .= chr(ord($text{$i})+2);
	}

	return $tmp;
}

function mail_crypter_javascript($mail, $text){
	return $out = "<a href=\"#\" id=\"mail-crypter-href\" value=\"" . mail_crypter_js_crypt($mail) . "\">" . mail_crypter_js_crypt($text) . "</a>";
}

/* Sollte der Nutzer nur die E-Mail-Adresse und keinen Linktext angegeben haben, wird die E-Mail-Adresse
 * auch als Linktext übergeben.
 */
function mail_crypter_just_mail($mail, $js){
	if($js == "true"){
		return mail_crypter_javascript($mail, $mail);
	} else{
		return mail_crypter_add_href($mail, $mail);
	}
}

/*
 * Hier werden beide Parameter an die add_href Methode übergeben um den HTML-tag zu generieren.
 */
function mail_crypter_text_mail($mail, $text, $js){
	if($js == "true"){
		return mail_crypter_javascript($mail, $text);
	} else{
		return mail_crypter_add_href($mail, $text);
	}
}

/*
 * Diese Funktion greift die Parameter (Attribute) des Shortcodes ab und generieren die Ausgabe.
 */
function mail_crypter_shortcode($atts){

	// Attribute werden aus Shortcode geladen
	$atts = shortcode_atts(array( 'mail' => '', 'text' => '', 'js' => ''), $atts, 'mail_crypt');

	$text = $atts['text'];
	$mail = $atts['mail'];
	$js = $atts['js'];

  if(empty($js)){
    $js = false;
  }

	// Überprüft welche Attribute (oder keine) von Nutzer benutzt wurden und gibt dann
	// den jeweiligen HTML-tag zurück.
	if(empty($mail)){
		return "";
	} else{
		if(empty($text)){
			return mail_crypter_just_mail($mail, $js);
		} else{
			return mail_crypter_text_mail($mail, $text, $js);
		}
	}
}

// Shortcode wird in Wordpress eingebunden
add_shortcode('mail_crypt', 'mail_crypter_shortcode');

	// Filter Functions with Hooks
	function mail_crypter_mce_button() {
	  // Check if user have permission
	  if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) ) {
	    return;
	  }
	  // Check if WYSIWYG is enabled
	  if ( 'true' == get_user_option( 'rich_editing' ) ) {
	    add_filter( 'mce_external_plugins', 'mail_crypter_tinymce_plugin' );
	    add_filter( 'mce_buttons', 'mail_crypter_register_mce_button' );
	  }
	}
	add_action('admin_head', 'mail_crypter_mce_button');

	// Function for new button
	function mail_crypter_tinymce_plugin( $plugin_array ) {
		$plugin_array['mail_crypter_mce_button'] = plugin_dir_url(__FILE__) .'/create_editor_button.js';
		return $plugin_array;
	}

	// Register new button in the editor
	function mail_crypter_register_mce_button( $buttons ) {
		array_push( $buttons, 'mail_crypter_mce_button' );
		return $buttons;
	}

	function  mail_crypter_option_page(){
		?>
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';?>"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="<?php print plugin_dir_url(__FILE__) .'/create_form.js';?>"></script>
		<div class="wrap">
			<h1>Mail Crypter <small>Version 0.3</small></h1>
			<p>Verschlüssel deine E-Mail-Adresse direkt. Mit oder ohne <code>a href</code> Tag<br /></p>
			<form id="mail_form">
				<fieldset class="form-group">
					<label>E-Mail-Adresse:</label>
			    	<input type="email" id="email" name="email" class="form-control" required="true" placeholder="E-Mail">
				</fieldset>
				<fieldset class="form-group">
					<label class="radio-inline"><input checked type="radio" name="tag" value="1">mit <code>a href Tag</code></label>
					<label class="radio-inline"><input type="radio" name="tag" value="0">nur E-Mail-Adresse</label>
				</fieldset>
				<fieldset class="form-group">
					<button type="button" id="submit_btn" class="btn btn-success pull-right">Verschlüsseln</button>
				</fieldset>
			</form>
			<form>
				<fieldset class="form-group">
					<label>Ausgabe:</label>
					<textarea id="output" name="output" class="form-control" rows="5"></textarea>
				</fieldset>
				<fieldset class="form-group">
					<label>In Beitrag: </label>
					<p>
						<span id="post"></span>
					</p>
			</form>
		</div>
	<?php
	}

	function mail_crypter_add_menu(){
		add_option('mail_crypter_meta_field', 'description');
		add_options_page('Mail Crypter Plugin', 'Mail-Crypter', 9, __FILE__, 'mail_crypter_option_page');
	}

add_action('admin_menu', 'mail_crypter_add_menu');
?>
