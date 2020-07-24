<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use MailEncrypt\CodeFactory;

final class CodeFactoryTest extends TestCase
{

    public function testCorrectEncryptToAscii() : void
    {
        $factory = new CodeFactory();
        $this->assertEquals(
            '&#116;&#101;&#115;&#116;&#64;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;',
            $factory->encrypt_to_ascii("test@mail.com")
        );
    }

    public function testCorrectEncryptByCaesar() : void
    {
        $factory = new CodeFactory();
        $this->assertEquals(
            'vguvBockn0eqo',
            $factory->encrypt_by_caesar("test@mail.com")
        );
    }

    public function testCorrectMailToCode() : void {
        $factory = new CodeFactory();
        $this->assertEquals(
            "<a href='#' name='mail-encrypt-tag' value='vguvBockn0eqo'>vguvBockn0eqo</a>",
            $factory->mail_to_code('test@mail.com', '', true)
        );
        $this->assertEquals(
            "<a href='#' name='mail-encrypt-tag' value='vguvBockn0eqo'>vguv</a>",
            $factory->mail_to_code('test@mail.com', 'test', true)
        );
        $this->assertEquals(
            "<a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#101;&#115;&#116;&#64;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'>&#116;&#101;&#115;&#116;&#64;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>",
            $factory->mail_to_code('test@mail.com', '', false)
        );
        $this->assertEquals(
            "<a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#101;&#115;&#116;&#64;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'>&#116;&#101;&#115;&#116;</a>",
            $factory->mail_to_code('test@mail.com', 'test', false)
        );
    }

}