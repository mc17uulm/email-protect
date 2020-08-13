<?php
/**
 * Plugin Name: Mail Encrypt
 * Description: Simple and easy to use plugin to protect your email addresses of spam bots. With the [mail_encrypt] shortcode or our own Gutenberg block, all your email addresses are secure!
 * Author: mc17
 * Author URI: https://github.com/mc17uulm/wp-mail-crypter
 * Version: 3.0
 * Text Domain: mail_encrypt_lang
 * Domain Path: /dist/lang
 * License: GPLv3
 * Licence URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Tags: mail, security, encryption, spam, email, secure, encrypt, protect
 * Requires PHP: 7.2
 *
 * === Plugin Information ===
 *
 * Version: 3.0
 * Date: 13.08.2020
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License version 2, as published by the Free Software Foundation. You may NOT assume
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * If there are problems, bugs or errors, please report on github: https://github.com/mc17uulm/wp-mail-encrypt
 *
 */

if (!defined('ABSPATH')) die("Invalid request");
if (!defined('PHP_VERSION_ID')) {
    define('PHP_VERSION_ID', 0);
}

/**
 * Check if php version is lower than 7.2. Older versions are not supported
 */
if(PHP_VERSION_ID < 70200) {
    die("Plugin requires php version >= 7.2");
}

require_once __DIR__ . '/src/php/MailEncrypt.php';
require_once __DIR__ . '/src/php/Loader.php';
require_once __DIR__ . '/src/php/CodeFactory.php';
require_once __DIR__ . '/src/php/TinyMCE.php';
require_once __DIR__ . '/src/php/views/AdminPage.php';

use MailEncrypt\MailEncrypt;
use MailEncrypt\Loader;
use MailEncrypt\TinyMCE;
use MailEncrypt\views\AdminPage;

$base = plugin_dir_url(__FILE__);
Loader::init($base);

add_shortcode('mail_crypt', function($attributes) {
    return MailEncrypt::generate_shortcode($attributes);
});

add_shortcode('mail_encrypt', function($attributes) {
    return MailEncrypt::generate_shortcode($attributes);
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

add_action('plugin_loaded', function() {
   load_plugin_textdomain(
       'mail_encrypt_lang',
       false,
       basename(dirname(__FILE__)) . '/dist/lang/'
   );
});
