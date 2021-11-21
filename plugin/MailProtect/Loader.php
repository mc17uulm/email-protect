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
 * Class Loader
 * @package MailProtect
 */
final class Loader
{

    /**
     * @var string
     */
    private string $file;
    /**
     * @var string | false
     */
    private $version;
    /**
     * @var array
     */
    private array $dependencies;

    public function __construct(string $file) {
        $this->file = $file;
        $this->version = defined('MAIL_PROTECT_VERSION') ? MAIL_PROTECT_VERSION : false;
        $path = plugin_dir_path($this->file) . 'dist/js/mail-protect-vendor.asset.php';
        $dependencies = file_exists($path) ? require($path) : [];
        if(array_key_exists('dependencies', $dependencies)) {
            $this->dependencies = $dependencies['dependencies'];
        } else {
            $this->dependencies = [];
        }
    }

    public function run() : void {

        load_plugin_textdomain('mail-protect', false, basename(dirname($this->file)) . '/language/');

        add_shortcode('mail_crypt', [$this, 'handle_shortcode']);
        add_shortcode('mail_encrypt', [$this, 'handle_shortcode']);
        add_shortcode('mail_protect', [$this, 'handle_shortcode']);

        add_filter('the_content', [$this, 'email_filter']);

        add_action('wp_enqueue_scripts', [$this, 'load_script']);

    }

    public function handle_shortcode(array $attributes) : string {
        $attributes = shortcode_atts(['mail' => '', 'text' => '', 'js' => ''], $attributes);

        if($attributes['mail'] === '') return __("<strong>Error</strong> [mail_protect] shortcode arguments are invalid. 'mail' is missing.", 'mail-protect');

        $factory = new CodeFactory();
        return $factory->mail_to_code($attributes['mail'], $attributes['text'], $attributes['js'] === 'true');

    }

    public function load_script() : void {
        wp_enqueue_script(
            'mail-protect',
            plugin_dir_url($this->file) . 'dist/js/mail-protect.js',
            $this->dependencies,
            $this->version,
            true
        );
    }

    /**
     * @param string $content
     * @return string | null
     */
    public function email_filter(string $content): ?string {
        $factory = new CodeFactory();
        $links = preg_replace_callback('/MAILTO:(.*?)([\'\"])/i', function(array $input) use($factory) {
            return sprintf('#%2$s data-mail-protect-click="%1$s"', $factory->encrypt_by_caesar($input[1]), $input[2]);
        }, $content);
        return preg_replace_callback('/[^\s\<\>]*\@[^\s\<\>]*/i', function(array $input) use($factory) {
            return sprintf('<span data-mail-protect="%1$s"></span>', $factory->encrypt_by_caesar($input[0]));
        }, $links ?? $content);
   }

}