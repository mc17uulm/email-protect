<?php

/**
 * Copyright (c) 2020. mc17
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

namespace MailEncrypt\views;

class AdminPage
{

    public static function render() : void {
        ?>
        <div class="wrap">
            <h1>Mail Encrypt</h1>
            <small>Version 3.0</small>
            <p><?= __('With the [mail_encrypt] shortcode and our new Gutenberg block, your email-addresses are protected of spam bots. On this site you can use our encryption engine for your own usage!', 'mail_encrypt_lang') ?><br /></p>
            <form id="mail-encrypt-form">
                <fieldset class="form-group">
                    <label for="mail-encrypt-email-field"><?= __('Email address', 'mail_encrypt_lang') ?>:</label>
                    <input type="email" id="mail-encrypt-email-field" class="form-control" required placeholder="<?= __('Email', 'mail_encrypt_lang') ?>">
                </fieldset>
                <fieldset class="form-group">
                    <label class="radio-inline"><input checked type="radio" name="mail-encrypt-type" value="1"><?= __('generate with <code>a href</code> tag', 'mail_encrypt_lang') ?></label>
                    <label class="radio-inline"><input type="radio" name="mail-encrypt-type" value="0"><?= __('encrypt only email', 'mail_encrypt_lang') ?></label>
                </fieldset>
                <fieldset class="form-group">
                    <button type="button" id="mail-encrypt-submit-btn" class="btn btn-success"><?= __('Encrypt', 'mail_encrypt_lang') ?></button>
                </fieldset>
            </form>
            <form>
                <fieldset class="form-group">
                    <label for="mail-encrypt-output-field"><?= __('Output', 'mail_encrypt_lang') ?>:</label>
                    <textarea id="mail-encrypt-output-field" class="form-control" rows="5"></textarea>
                </fieldset>
                <fieldset class="form-group">
                    <label for="mail-encrypt-html-field"><?= __('How is the output displayed in a browser:', 'mail_encrypt_lang') ?>:</label>
                    <span id="mail-encrypt-html-field"></span>
                </fieldset>
                <fieldset>
                    <label for="mail-encrypt-source-field"><?= __('The encrypted email address in your sourcecode:', 'mail_encrypt_lang') ?>:</label>
                    <span id="mail-encrypt-source-field"></span>
                </fieldset>
                <small>Mail Encrypt WP Plugin | &copy; <a href="https://github.com/mc17uulm">https://github.com/mc17uulm</a> | 2015 - 2020</small>
            </form>
        </div>
<?php
    }
}