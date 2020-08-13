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

require_once __DIR__ . "/CodeFactory.php";

/**
 * Class MailEncrypt
 * @package MailEncrypt
 */
final class MailEncrypt
{

    /**
     * @param array $attributes
     * @return string
     */
    public static function generate_shortcode(array $attributes) : string
    {
        $attributes = shortcode_atts(array('mail' => '', 'text' => '', 'js' => ''), $attributes);

        if(empty($attributes['mail'])) {
            return "<strong>Error:</strong> [mail_encrypt] shortcode arguments are invalid.";
        }

        if(empty($attributes['text'])) {
            $attributes['text'] = '';
        }

        $factory = new CodeFactory();
        return $factory->mail_to_code($attributes['mail'], $attributes['text'], $attributes['js'] === "true");
    }

}
