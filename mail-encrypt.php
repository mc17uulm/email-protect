<?php
/*
Plugin Name: Mail Encrypt
Description: Secures your mail addresses from spam bots. Use the [mail-crypt] shortcode to add encrypted mail addresses to your page
Author: mc17
Author URI: https://github.com/mc17uulm/wp-mail-crypter
Version: 3.0
Text Domain: mail_encrypt_lang
Domain Path: /dist/lang
License: GPLv3
Licence URI: http://www.gnu.org/licenses/gpl-3.0.txt
Tags: mail, security, encryption, spam, email, secure, encrypt, protect

=== Plugin Information ===

Version: 3.0
Date: 24.07.2020
If there are problems, bugs or errors, please report on github: https://github.com/mc17uulm/wp-mail-crypter

 */

if (!defined('ABSPATH')) exit;

require_once __DIR__ . '/src/php/MailEncrypt.php';
require_once __DIR__ . '/src/php/Loader.php';
require_once __DIR__ . '/src/php/CodeFactory.php';
require_once __DIR__ . '/src/php/TinyMCE.php';
require_once __DIR__ . '/src/php/views/Viewable.php';
require_once __DIR__ . '/src/php/views/AdminPage.php';

use MailEncrypt\MailEncrypt;
use MailEncrypt\Loader;
use MailEncrypt\TinyMCE;
use MailEncrypt\views\AdminPage;

$base = plugin_dir_url(__FILE__);
Loader::set_base($base);

$instance = new MailEncrypt();

add_shortcode('mail_crypt', function($attributes) use ($instance) {
    return $instance->generate_shortcode($attributes);
});

add_shortcode('mail_encrypt', function($attributes) use ($instance) {
    return $instance->generate_shortcode($attributes);
});

add_action('wp_enqueue_scripts', function () {
    Loader::activate_frontend_scripts();
});

add_action('plugins_loaded', function() {
    Loader::load_textdomain();
});

add_action('admin_menu', function() {
    $page = add_menu_page(
        'Mail Encrypt',
        'Mail Encrypt',
        'manage_options',
        'mail-encrypt',
        function() {
            AdminPage::render();
        },
        'dashicons-admin-network'
    );

    add_action("load-$page", function() {
        add_action('admin_enqueue_scripts', function() {
            Loader::activate_backend_scripts();
        });
    });
});

add_action('admin_head', function() {
    TinyMCE::register_mce_button();
});

add_action('enqueue_block_editor_assets', function() {
    Loader::activate_gutenberg_support();
});
