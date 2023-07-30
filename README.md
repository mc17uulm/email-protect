# Email Protect
<small>Version 4.0.3</small>

> :warning: **Breaking changes: ** Version 4.0.x does no longer support the MailEncrypt Gutenberg Block. Your email addresses are still protected

## Wordpress anti-spam email plugin :lock::e-mail:

Simple, fast and no-config plugin to protect your email address. No need for shortcodes or blocks. EmailProtect encrypts all your email addresses in your blog.

---

## Usage

Only install and activate MailProtect in your WordPress backend. Now all your email addresses are protected against spam-bots. No configuration required. 

---

## How are my email addresses encrypted?

EmailProtect scans all of your posts, sites and other content for email addresses. If an email address is found, it is simply replaced with a special tag. 
If a bot is now crawling your site, the tag cannot be decrypted. Only for an actual user our script decrypts this tag and the email address can be viewed.

**Example**

*This is what your user sees:*

Here is my email address [contact@code-leaf.de](mailto:contact@code-leaf.de).

*This is what a spam bot sees:*

```html
Here is my email address 
<a href ="#" data-email-protect-click="eqpvcevBeqfg/ngch0fg">
    <span data-email-protect="eqpvcevBeqfg/ngch0fg"></span>
</a>
```

---

## Versions

- 4.0.3
  - updated dependencies

- 4.0.2
  - shortcode renders to ``<span>`` not ``<p>``
  - legacy index files added

- 4.0.1
  - better email recognition
  - fixed bugs

- 4.0.0
  - breaking changes for users of version 3.0 or older
  - Gutenberg-Block deprecated
  - ClassicEditor menu integration deprecated
  - backend menu removed
  - refactored complete code base
  - shortcode deprecation in version 5

- 3.0 
  - new design 
  - renaming 
  - integration in Gutenberg Editor via 'MailEncrypt Block' 
  - backend generator running now on client 
  - fixed bugs

- 2.0.3 
  - added Internationalization 
  - added German language pack

- 2.0.2 
  - updated readme 
  - fixed 2.0.1 bug also in js files

- 2.0.1 
  - fixed wrong shortcode

- 2.0 
  - better compatibility with modern WordPress versions 
  - main language: english 
  - removed bugs and side effects 
  - ajax handling with wp core 
  - menu page instead of options page (included stylesheet now locally)
  - js updated to ES6 (if usable)
  - removed deprecated php functions

- 1.0 
  - js function added 
  - 0.3 bugs fixed

- 0.3 
  - changed menu for generating encrypted email addresses 
  - changed icon in tinymce editor 
  - menu css and js now serving per cdn 
  - now working with WordPress 4.7.3

- 0.2.3 
  - menu with Bootstrap

- 0.2.2 
  - menu added 
  - ajax text-to-encrypted-text generator added

- 0.2.1 
  - bugs v0.2 repair

- 0.2 
  - added button in tinymce editor for easy shortcode creation

- 0.1 
  - initial Version

Til version 4.0.0 known as 'WP Mail Encrypt', til version 3.0 known as 'Mail Crypter'

## Source

**wordpress.org:**
[https://de.wordpress.org/plugins/email-protect/](https://de.wordpress.org/plugins/mail-crypt/)

The full sourcecode can be found on github:

**github.com:**
[https://github.com/mc17uulm/email-protect](https://github.com/mc17uulm/email-protect)