<?php

$strings =
    'tinyMCE.addI18n( 
		"' . $mce_locale .'.mo", 
			{
                title : "' . esc_js( _x( 'Add mail crypter shortcode', '', 'mail_encrypt_lang' ) ) . '",
                mail_label : "' . esc_js( _x( 'Email address', '', 'mail_encrypt_lang' ) ) . '",
                link_label : "' . esc_js( _x( 'Link label', '', 'mail_encrypt_lang' ) ) . '",
                js_label : "' . esc_js( _x( 'Secure via javascript', '', 'mail_encrypt_lang' ) ) . '",
			} 
  		);
  	';