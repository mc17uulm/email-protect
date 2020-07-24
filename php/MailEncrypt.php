<?php

namespace MailEncrypt;

final class MailEncrypt
{

    function handle_ajax_request() : void {
        /**switch($_POST["type"])
        {
            case 1:
                die(mc_create_ascii_html_tag($_POST["email"], $_POST["email"]));
            default:
                die(mc_encrypt_to_ascii($_POST["email"]));
        }*/
    }

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
