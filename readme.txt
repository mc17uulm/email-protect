=== Mail Encrypt ===
Contributors: mc17
Tags: mail, email, security, protection, encryption, spam, bots, secure, encrypt, protect, easy, fast
Requires at least: 4.4.1
Tested up to: 5.5
Stable tag: trunk
Requires PHP: 7.2
License: GNUv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Simple and easy to use plugin to protect your email addresses of spam bots. With the [mail_encrypt] shortcode or our own Gutenberg block, all your email addresses are secure!

== Description ==
# WP Mail Encrypt
<sup>Version 3.0</sup>

<sup>til version 3.0 known as 'Mail Crypter'</sup>

## Wordpress anti-spam mail plugin

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

== Installation ==
1. Download zip and upload via wordpress installer, or search in plugins menu for "Mail Encrypt" and install plugin
2. Activated plugin
3. Use the `[mail_encrypt]` shortcode or our 'MailEncrypt Block' Gutenberg block to protect your email addresses secure and fast!

== Screenshots ==
1. With our new 'MailEncrypt Block' all mail addresses are encrypted automatically.
2. In our new 'MailEncrypt Block' the protected mail addresses are marked.
3. On the frontend your users see the mail address just as a normal link. For spam bots the address is not visible.
4. To protect your mail address but use another text for the link, just use our '[mail_encrypt]' shortcode.
5. Use our generator to encrypt any mail address in our backend.
6. You can use our shortcode generator in the Classic Editor to build your custom shortcode.
7. Usable in the Classic Editor with our '[mail_encrypt]' shortcode.

== Changelog ==

= 3.0 =
* new design
* renaming
* integration in Gutenberg Editor via 'MailEncrypt Block'
* backend generator running now on client
* fixed bugs

= 2.0.3 =
* added Internationalization
* added German language pack

= 2.0.2 =
* updated readme
* fixed 2.0.1 bug also in js files

= 2.0.1 =
* fixed wrong shortcode

= 2.0 =
* better compability with modern wordpress versions
* main language: english
* removed bugs and side effects
* ajax handling with wp core
* menu page instead of options page (included stylesheet now locally)
* js updated to ES6 (if usable)
* removed deprecated php functions

= 1.0 =
* js function added
* 0.3 bugs fixed

= 0.3 =
* changed menu for generating crypted mail adresses
* changed icon in tinymce editor
* menu css and js now serving per cdn
* now working with wordpress 4.7.3

= 0.2.3 =
* menu with Bootstrap

= 0.2.2 =
* menu added
* ajax text-to-cryted-text generator added

= 0.2.1 =
* bugs 0.2 repair

= 0.2 =
* added button in tinymce editor for easy shortcode creation

= 0.1 =
* initial Version