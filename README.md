# WP Mail Encrypt
<small>Version 3.0</small>

<small>til version 3.0 known as 'Mail Crypter'</small>

### Wordpress anti-spam mail plugin :lock::e-mail:

Simple and easy to use plugin to protect your email addresses of spam bots. With the [mail_encrypt] shortcode or our own Gutenberg block, all your email addresses are secure!

---

### Usage

#### Gutenberg Block

Since version 3.0 the plugin provides an own Gutenberg Block. All email addresses used in our "MailEncrypt Block" are automatically encrypted (see our screenshots).

#### Shortcode

You can use our shortcode with the Gutenberg Editor and the Classic Editor. With the Gutenberg Editor use simply the "Shortcode Block" and insert the same shortcode, as in the Classic Editor.

If you are using the Classic Editor you can enter the shortcode direct:

Insert your email address and a link text (optional) to the `[mail_encrypt]` shortcode:
`[mail_encrypt mail="your@mailaddress.com" text="My Name"]`.

You can also use our TinyMCE plugin in the Classic Editor. With a simple click on the MailEncrypt Icon, the shortcode is build fast for you.

#### Generator

You want to use our system in other areas? No problem! We provide our own generator in the admin menu. Simply insert the to be protected email address and get
the associated sourcecode.

#### Javascript

*deprecated since v3.0*

*older shortcodes with js active are still working*

---

### How are the mail addresses encrypted

The plugin uses a simple mechanism, which has no negative effect on the page speed. On the result page, the email address is displayed as follows: [My Name](mailto:your@mailaddress.com)

In the sourcecode the email address can not be found by a spam bot:
```html
<a href ='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#121;&#111;&#117;&#114;&#64;&#109;&#97;&#105;&#108;&#97;&#100;&#100;&#114;&#101;&#115;&#115;&#46;&#99;&#111;&#109;'>&#77;&#121;&#32;&#78;&#97;&#109;&#101;</a>
```

---

#### Code:

**wordpress.org:**
[https://de.wordpress.org/plugins/mail-crypter/](https://de.wordpress.org/plugins/mail-crypter/)

The full sourcecode can be found on github:

**github.com:**
[https://github.com/mc17uulm/wp-mail-encrypt](https://github.com/mc17uulm/wp-mail-encrypt)