<?php

/**
 * Copyright (c) 2021 CodeLeaf
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

namespace MailProtect;

/**
 * Class CodeFactory
 * @package MailProtect
 */
final class CodeFactory
{

    /**
     * @param string $str
     * @return string
     */
    public function encrypt_to_ascii(string $str) : string {
        return array_reduce(
            array_map(function(string $piece) {
                return ord($piece);
            }, str_split($str)),
            function(?string $carry, int $item) {
                $carry .= "&#$item;";
                return $carry;
            }
        );
    }

    /**
     * @param string $str
     * @return string
     */
    public function encrypt_by_caesar(string $str) : string {
        return implode("",
            array_map(function (string $piece) {
                return chr(ord($piece) + 2);
            }, str_split($str))
        );
    }

    /**
     * @param string $mail
     * @param string $text
     * @param bool $js
     * @return string
     */
    public function mail_to_code(string $mail, string $text, bool $js) : string
    {
        if($js) {
            $enc_mail = $this->encrypt_by_caesar($mail);
            return $text === '' ?
                "<a href='#' name='mail-encrypt-tag' value='$enc_mail'>$enc_mail</a>" :
                "<a href='#' name='mail-encrypt-tag' value='$enc_mail'>" . $this->encrypt_by_caesar($text) . "</a>";
        } else {
            return $text === '' ?
                "<a href='" . $this->encrypt_to_ascii("mailto:$mail") . "'>" . $this->encrypt_to_ascii($mail) . "</a>" :
                "<a href='" . $this->encrypt_to_ascii("mailto:$mail") . "'>" . $this->encrypt_to_ascii($text) . "</a>";
        }
    }

}