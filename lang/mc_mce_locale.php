<?php
/**
 * Created by PhpStorm.
 * User: Marco
 * Date: 24.10.2018
 * Time: 22:11
 */

$strings =
    'tinyMCE.addI18n( 
		"' . $mce_locale .'.mc", 
			{
			title : "' . esc_js( _x( 'Add mail crypter shortcode', '', 'mc_language' ) ) . '",
			mail_label : "' . esc_js( _x( 'Email address', '', 'mc_language' ) ) . '",
			link_label : "' . esc_js( _x( 'Link label', '', 'mc_language' ) ) . '",
			js_label : "' . esc_js( _x( 'Secure via javascript', '', 'mc_language' ) ) . '",
			} 
  		);
  	';