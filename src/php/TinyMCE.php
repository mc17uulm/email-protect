<?php

namespace MailEncrypt;

require_once __DIR__ . "/Loader.php";

/**
 * Class TinyMCE
 * @package MailEncrypt
 */
final class TinyMCE
{

    public static function register_mce_button() : void {

        // check if user can edit posts and pages; without this permission access to mce button is not relevant
        if(
            !current_user_can('edit_posts') &&
            !current_user_can('edit_pages')
        ) {
            return;
        }

        if(get_user_option('rich_editing')) {

            add_filter('mce_external_plugins', function(array $plugins) {
                add_filter('mce_external_languages', function(array $locales) {
                    $locales['mail_encrypt'] = Loader::get_base() . "dist/lang/mail-encrypt-mce-locale.php";
                    return $locales;
                });
                $plugins['mail_encrypt_mce_button'] = Loader::get_base() . "dist/js/mail-encrypt-mce-script.js";
                return $plugins;
            });

            add_filter('mce_buttons', function(array $buttons) {
                array_push($buttons, 'mail_encrypt_mce_button');
                return $buttons;
            });

        }
    }

}