<?php

namespace MailEncrypt;

/**
 * Class Loader
 * @package MailEncrypt
 */
final class Loader
{

    private static $base = "";

    public static function activate_frontend_scripts() : void {
        wp_enqueue_script(
            'mail_encrypt.js',
            self::$base . 'dist/js/mail-encrypt-frontend.js',
            [],
            null,
            true
        );
    }

    public static function activate_backend_scripts() : void {
        wp_enqueue_script(
            'mail_encrypt_backend.js',
            self::$base . 'dist/js/mail-encrypt-backend.js',
            [],
            null,
            true
        );
        wp_enqueue_style('bootstrap_css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css', array(), false, 'all');
        wp_enqueue_script('bootstrap_js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', array('jquery'), null, false);
        wp_localize_script(
            'mail_encrypt_backend.js',
            'mail_encrypt_lang',
            ['ajax_url' => admin_url('admin-ajax.php')]
        );
    }

    public static function activate_gutenberg_support() : void {
        wp_enqueue_style(
            'mail_encrypt_gutenberg.css',
            self::$base . 'dist/css/mail-encrypt-gutenberg.css',
            false,
            'all'
        );
        wp_enqueue_script(
            'mail_encrypt_gutenberg.js',
            self::$base . 'dist/js/mail-encrypt-gutenberg.js',
            ['wp-blocks', 'wp-editor', 'wp-i18n', 'wp-element'],
            false,
            true
        );
    }

    public static function load_textdomain() : void {
        load_plugin_textdomain('mail_encrypt_lang', false, self::$base . 'dist/lang/');
    }

    public static function set_base(string $base) : void {
        self::$base = $base;
    }

}