<?php

/**
 * MailProtect
 *
 * @package     MailProtect
 * @author      CodeLeaf
 * @copyright   2021 CodeLeaf
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: MailProtect
 * Description: Simple and easy to use plugin to protect your email addresses of spam bots. With the [mail_encrypt] shortcode or our own Gutenberg block, all your email addresses are secure!
 * Author: CodeLeaf
 * Author URI: https://github.com/mc17uulm/wp-mail-crypter
 * Version: 4.0.0
 * License: GPLv3
 * Licence URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Tags: mail, security, encryption, spam, email, secure, encrypt, protect
 * Requires PHP: 8.1
 *
 * === Plugin Information ===
 *
 * Version: 4.0.0
 * Date: 20.11.2021
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License version 2, as published by the Free Software Foundation. You may NOT assume
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * If there are problems, bugs or errors, please report on GitHub: https://github.com/mc17uulm/mail-protect
 *
 */

declare(strict_types=1);

if (!defined('ABSPATH')) die("Invalid request");
if(!defined('PHP_VERSION_ID') || PHP_VERSION_ID < 70000) {
    error_log('MailProtect => plugin requires php version >= 7.0. Given (' . PHP_VERSION . ')');
    die('MailProtect => plugin requires php version >= 7.0.');
}
if (!defined('PHP_VERSION_ID')) {
    define('PHP_VERSION_ID', 0);
}

define('MAIL_PROTECT_VERSION', '4.0.0');
define('MAIL_PROTECT_SLUG', 'mail-protect');
define('MAIL_PROTECT_FILE', __FILE__);
define('MAIL_PROTECT_URL', plugin_dir_url(__FILE__));
define('MAIL_PROTECT_PATH', plugin_dir_path(__FILE__));
define('MAIL_PROTECT_BASENAME', plugin_basename(__FILE__));
define('MAIL_PROTECT_DIR', __DIR__);

require_once __DIR__ . '/vendor/autoload.php';

use MailProtect\Loader;

$loader = new Loader(__FILE__);

try {
    $loader->run();
} catch(Exception $e) {
    error_log($e->getMessage());
}