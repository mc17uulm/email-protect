<?php

namespace MailEncrypt\views;

require_once __DIR__ . '/Viewable.php';

use MailCrypter\views\Viewable;

class AdminPage implements Viewable
{

    public static function render() : void {
        ?>
        <div class="wrap">
            <h1>Mail Crypter</h1>
            <small>Version 3.0</small>
            <p><?= __('Encrypt your email address directly. With or without <code>a href</code> tag', 'mc_language') ?><br /></p>
            <form id="mail-encrypt-form">
                <fieldset class="form-group">
                    <label for="mail-encrypt-email-field"><?= __('Email address', 'mc_language') ?>:</label>
                    <input type="email" id="mail-encrypt-email-field" class="form-control" required placeholder="<?= __('Email', 'mc_language') ?>">
                </fieldset>
                <fieldset class="form-group">
                    <label class="radio-inline"><input checked type="radio" name="mail-encrypt-type" value="1"><?= __('with <code>a href</code> tag', 'mc_language') ?></label>
                    <label class="radio-inline"><input type="radio" name="mail-encrypt-type" value="0"><?= __('only email', 'mc_language') ?></label>
                </fieldset>
                <fieldset class="form-group">
                    <button type="button" id="mail-encrypt-submit-btn" class="btn btn-success"><?= __('Encrypt', 'mc_language') ?></button>
                </fieldset>
            </form>
            <form>
                <fieldset class="form-group">
                    <label for="mail-encrypt-output-field"><?= __('Output', 'mc_language') ?>:</label>
                    <textarea id="mail-encrypt-output-field" class="form-control" rows="5"></textarea>
                </fieldset>
                <fieldset class="form-group">
                    <label for="mail-encrypt-html-field"><?= __('In page', 'mc_language') ?>:</label>
                    <span id="mail-encrypt-html-field"></span>
                </fieldset>
                <fieldset>
                    <label for="mail-encrypt-source-field"><?= __('Sourcecode', 'mc_language') ?>:</label>
                    <span id="mail-encrypt-source-field"></span>
                </fieldset>
            </form>
        </div>
<?php
    }
}