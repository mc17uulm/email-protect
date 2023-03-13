<?php

declare(strict_types=1);

/**
 * EmailProtect
 *
 * @package     Email Protect
 * @author      CodeLeaf
 * @copyright   2021 CodeLeaf
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: Email Protect
 * Description: Simple, fast and no-config plugin to protect your email address. No need for shortcodes or blocks. EmailProtect encrypts all your email addresses in your blog.
 * Author: CodeLeaf
 * Author URI: https://github.com/mc17uulm/email-protect
 * Version: 4.0.3
 * License: GPLv3
 * Licence URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Tags: mail, security, encryption, spam, email, secure, encrypt, protect
 * Requires PHP: 8.1
 *
 * === Plugin Information ===
 *
 * Version: 4.0.3
 * Date: 13.03.2023
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


if (!defined('ABSPATH')) die("Invalid request");
if(!defined('PHP_VERSION_ID') || PHP_VERSION_ID < 70100) {
    error_log('EmailProtect => plugin requires php version >= 7.1. Given (' . PHP_VERSION . ')');
    die('EmailProtect => plugin requires php version >= 7.1.');
}
if (!defined('PHP_VERSION_ID')) {
    define('PHP_VERSION_ID', 0);
}

define('EMAIL_PROTECT_VERSION', '4.0.3');
define('EMAIL_PROTECT_SLUG', 'email-protect');
define('EMAIL_PROTECT_FILE', __FILE__);
define('EMAIL_PROTECT_URL', plugin_dir_url(__FILE__));
define('EMAIL_PROTECT_PATH', plugin_dir_path(__FILE__));
define('EMAIL_PROTECT_BASENAME', plugin_basename(__FILE__));
define('EMAIL_PROTECT_DIR', __DIR__);

require_once __DIR__ . '/vendor/autoload.php';

use EmailProtect\Loader;

$loader = new Loader(__FILE__);

try {
    $loader->run();
} catch(Exception $e) {
    error_log($e->getMessage());
}