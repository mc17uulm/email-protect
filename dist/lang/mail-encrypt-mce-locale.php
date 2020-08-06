<?php

$strings =
    'tinyMCE.addI18n( 
		"' . $mce_locale .'.mo", 
			{
                title : "' . esc_js( _x( 'Add MailEncrypt shortcode', '', 'mail_encrypt_lang' ) ) . '",
                mail_label : "' . esc_js( _x( 'Email address', '', 'mail_encrypt_lang' ) ) . '",
                link_label : "' . esc_js( _x( 'Link label', '', 'mail_encrypt_lang' ) ) . '",
			} 
  		);
  	';