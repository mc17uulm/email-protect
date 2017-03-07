=== Mail Crypter ===
Contributors: wilka_2000
Tags: mail, spam, bot, security, sicherheit, email, verschlüsseln, verschlüsselung
Requires at least: 4.4.1
Tested up to: 4.7.3
Stable tag: trunk
License: GNUv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Dieses Plugin sch&#252;tzt ihre E-Mail-Adressen gegen den Zugriff durch Spam Bots.

== Description ==
Mail Crypter 0.3

Mit diesem Plugin kannst du deine E-Mail Adressen auf deiner Wordpress Seite sch&#252;tzen.
Dadurch ist es Bots nicht mehr m&#246;glich deine Webseite nach E-Mail-Adressen zu durchsuchen und diese dann f&#252;r SPAM oder anderes zu missbrauchen.
Mit dem einfachen `[mail_crypt]` Shortcode kannst du einfach deine E-Mail-Adressen in Betr&#228;ge und Seiten einf&#252;gen.

Dazu musst du lediglich die einzuf&#252;gende E-Mail-Adresse als  `mail` Attribut angeben.

Beispiel:
E-Mail-Adresse verschl&#252;&#223;eln:

`[mail_crypt mail="deine@mail-adresse.de"]` : Unter `mail=""` gibst du einfach deine zu verschl&#252;sselnde E-Mail-Adresse an. Dadurch wird folgendes angezeigt:
deine@mail-adresse.de

`[mail_crypt mail="deine@mail-adresse.de" text="Bitte senden Sie mir eine E-Mail"]` : Wie oben gibst du unter `mail=""` die E-Mail-Adresse ein und unter `text=""` einfach den Link-Text.
Dadurch wird folgendes angezeigt: [Bitte senden Sie mit eine E-Mail](deine@mail-adresse.de )

== Installation ==
1. Upload the plugin files to the `/wp-content/plugins/mail-crypter` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Now you can use the `[mail_crypt]` shortcode. *Attention:* If you don't add any attributes, nothing will be displayed on your site. This is how you use the shortcode correctly:
`[mail_crypt mail="your@mail-address-com" text="Send me an Email"]` (The attribute text may be omitted).

== Frequently Asked Questions ==

== Screenshots ==
1. Im Menü E-Mail-Adressen verschlüsseln und Code generieren.
2. Im Editor einfach einen Shortcode einfügen.
3. Beispielanwendung im Editor.
4. Beispielanwendung aus Sicht des Webseiten-Nutzer.
5. Im Quellcode der Seite ist die E-Mail-Adresse verschlüsselt.

== Changelog ==
= 0.1 =
* initial Version

= 0.2 =
* added button in tinymce editor for easy shortcode creation

= 0.2.1 =
* bugs 0.2 repair

= 0.2.2 =
* menu added
* ajax text-to-cryted-text generator added

= 0.2.3 =
* menu with Bootstrap

= 0.3 =
* changed menu for generating crypted mail adresses
* changed icon in tinymce editor
* menu css and js now serving per cdn
* now working with wordpress 4.7.3
