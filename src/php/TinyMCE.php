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