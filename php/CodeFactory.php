<?php

namespace MailEncrypt;

/**
 * Class CodeFactory
 * @package MailEncrypt
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
            return empty($text) ?
                "<a href='#' name='mail-encrypt-tag' value='$enc_mail'>$enc_mail</a>" :
                "<a href='#' name='mail-encrypt-tag' value='$enc_mail'>" . $this->encrypt_by_caesar($text) . "</a>";
        } else {
            return empty($text) ?
                "<a href='" . $this->encrypt_to_ascii("mailto:$mail") . "'>" . $this->encrypt_to_ascii($mail) . "</a>" :
                "<a href='" . $this->encrypt_to_ascii("mailto:$mail") . "'>" . $this->encrypt_to_ascii($text) . "</a>";
        }
    }

}