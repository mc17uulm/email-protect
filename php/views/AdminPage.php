<?php

namespace MailCrypter\views;

use MailCrypter\views\Viewable;

class AdminPage implements Viewable
{

    public static function render() : void
    {
        ?>
        <div id="mail-cryper-app"></div>
        <?php
    }

}