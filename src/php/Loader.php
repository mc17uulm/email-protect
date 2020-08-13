<?php

/**
 * Copyright (c) 2020. mc17
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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

    /**
     * @param string $base
     */
    public static function init(string $base) : void {
        self::$base = $base;
    }

    public static function get_base() : string {
        return self::$base;
    }

}