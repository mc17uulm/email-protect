<?php

namespace MailEncrypt;

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
    public function generate_shortcode(array $attributes) : string
    {
        $attributes = shortcode_atts(array('mail' => '', 'text' => '', 'js' => ''), $attributes);

        if(empty($attributes['mail'])) {
            return "<strong>Error:</strong> [mail_encrypt] shortcode arguments are invalid.";
        }


    }

}
