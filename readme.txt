=== Mail Crypter ===
Contributors: wilka_2000
Tags: mail, security, encryption, spam, email, secure, encrypt, protect
Requires at least: 4.4.1
Tested up to: 4.9.8
Stable tag: trunk
License: GNUv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Secures your mail addresses from spam bots. Use the [mail-crypt] shortcode to add encrypted mail addresses to your page

== Description ==
# WP Mail Crypter
Version 2.0.3

## Wordpress anti-spam mail plugin

This plugin secures your email addresses on your wordpress page from spam bots. With the simple use of the `[mail_crypt]` shortcode you can easily protect your email addresses from bots.

---

#### Usage:

Insert your email address and a link text (optional) to the `[mail_crypt]` shortcode:
`[mail_crypt mail="your@mailaddress.com" text="My Name"]`.

Result on your page: [My Name](mailto:your@mailaddress.com)

Sourcecode:
```html
<a href ='&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#121;&#111;&#117;&#114;&#64;&#109;&#97;&#105;&#108;&#97;&#100;&#100;&#114;&#101;&#115;&#115;&#46;&#99;&#111;&#109;'>&#77;&#121;&#32;&#78;&#97;&#109;&#101;</a>
```

Now your email address isn't visible anymore for spam bots. You can also encrypt your email addresses via Javascript:

---

#### Javascript:

Only add the `js` attribute to your shortcode: `[mail_crypt mail="your@mailaddress.com" text="My Name via js" js="true"]`

Result on your page: [My Name via js](mailto:your@mailaddress.com)

Sourcecode:
```html
<a href='#' name='mail-encrypt-href' value='{qwtBockncfftguu0eqo'>O{"Pcog</a>`
```

---

#### Code:

**wordpress.org:**
[https://de.wordpress.org/plugins/mail-crypter/](https://de.wordpress.org/plugins/mail-crypter/)

**github.com:**
[https://github.com/mc17uulm/wp-mail-crypter](https://github.com/mc17uulm/wp-mail-crypter)

== Installation ==
1. Download zip and upload via wordpress installer, or search in plugins menu for "Mail Crypter" and install plugin
2. Activated plugin
3. Add `[mail_crypt]` shortcode on your pages and posts as shown in the description

== Screenshots ==
1. You can encrypt your mail address directly in the menu
2. Or use the menu in the editor to create a shortcode
3. Example shortcode. Usage shown in description
4. No mail address is shown in the source code now. The email address is secure from spam bots but still visible for visitors.

== Changelog ==
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