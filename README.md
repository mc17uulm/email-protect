# WP Mail Crypter 
<small>Version 3.0</small>

### Wordpress anti-spam mail plugin :lock::e-mail:

This plugin secures your email addresses on your wordpress page from spam bots. With the simple use of
the `[mail_crypt]` shortcode you can easily protect your email addresses from bots.

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