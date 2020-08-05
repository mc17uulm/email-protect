<?php

namespace MailEncrypt\views;

require_once __DIR__ . '/Viewable.php';

use MailCrypter\views\Viewable;

class AdminPage implements Viewable
{

    public static function render() : void
    {
        ?>
        <div id="mail-encrypt-app"></div>
        <?php
    }

    private static function old() : void {
        ?>
<div class="wrap">
    <h1>Mail Crypter <small><small>Version 3.0</small></small></h1>
    <p><?= __('Encrypt your email address directly. With or without <code>a href</code> tag', 'mc_language') ?><br /></p>
    <form id="mc_form">
        <fieldset class="form-group">
            <label><?= __('Email address', 'mc_language') ?>:</label>
            <input type="email" name="mc_email" class="form-control" required="true" placeholder="<?= __('Email', 'mc_language') ?>">
        </fieldset>
        <fieldset class="form-group">
            <label class="radio-inline"><input checked type="radio" name="tag" value="1"><?= __('with <code>a href</code> tag', 'mc_language') ?></label>
            <label class="radio-inline"><input type="radio" name="tag" value="0"><?= __('only email', 'mc_language') ?></label>
        </fieldset>
        <fieldset class="form-group">
            <button type="button" id="mc_submit_btn" class="btn btn-success pull-right"><?= __('Encrypt', 'mc_language') ?></button>
        </fieldset>
    </form>
    <form>
        <fieldset class="form-group">
            <label><?= __('Output', 'mc_language') ?>:</label>
            <textarea id="mc_output" name="mc_output" class="form-control" rows="5"></textarea>
        </fieldset>
        <fieldset class="form-group">
            <label><?= __('In page', 'mc_language') ?>:</label>
            <p>
                <span id="mc_post"></span>
            </p>
        </fieldset>
        <fieldset>
            <label><?= __('Sourcecode', 'mc_language') ?>:</label>
            <p>
            <pre id="mc_source"></pre>
            </p>
        </fieldset>
    </form>
</div>
<?php
    }
}