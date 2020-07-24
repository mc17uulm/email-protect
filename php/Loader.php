<?php

namespace MailEncrypt;

/**
 * Class Loader
 * @package MailEncrypt
 */
final class Loader
{

    public static function activate_frontend_scripts() : void {
        wp_enqueue_script(
            'mail_encrypt.js',
            plugin_dir_url(__FILE__) . '/../dist/js/mail-encrypt.js',
            [],
            null,
            true
        );
    }

    public static function activate_backend_scripts() : void {
        wp_enqueue_script(
            'mail_encrypt_backend.js',
            plugin_dir_url(__FILE__) . '/../dist/js/mail-encrypt-backend.js',
            [],
            null,
            true
        );
        wp_localize_script(
            'mail_encrypt_backend.js',
            'mail_encrypt_lang',
            ['ajax_url' => admin_url('admin-ajax.php')]
        );
    }

    public static function load_textdomain() : void {
        load_plugin_textdomain('mail_encrypt_lang', false, basename(dirname(__FILE__) . '/../dist/lang/'));
    }



}