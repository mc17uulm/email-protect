=== Mail Crypter ===
Contributors: wilka_2000
Tags: mail, spam, bot, security, sicherheit, email, verschlüsseln, verschlüsselung, javascript
Requires at least: 4.4.1
Tested up to: 4.7.3
Stable tag: trunk
License: GNUv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Diese Plugin schützt deine E-Mail-Adressen gegen den Zugriff durch Spam Bots.

== Description ==
**Mail Crypter 1.0**

Mail Crypter hilft dir dabei deine E-Mail-Adressen vor dem Zugriff durch Bots zu schützen. Die Nutzer deiner Seite können deine E-Mail-Adresse weiterhin in Klartext sehen, im Quellcode ist die E-Mail-Adresse jedoch verschlüsselt. Du kannst selber auswählen, ob du per HTML oder Javascript verschlüsseln möchtest.

Die E-Mail-Adresse lässt sich ganz einfach mit dem `[mail_crypt]` Shortcode in Seiten und Beiträge einfügen. Unter dem Attribut `mail` gibst du deine E-Mail-Adresse ein. Optional kannst du unter dem Attribut `text` den Linktext angeben.

Ob du deine E-Mail-Adresse per HTML (mittels ASCII-Code) oder per Javascript verschlüsseln möchstest, kannst du mit dem `js` Attribut angeben. Um den Shortcode nicht selber eingeben zu müssen, kannst du dir in deinem Editor den Shortcode mit unserem eingebauten Plugin erstellen lassen.

Außderdem bietet unser Plugin die Möglichkeit sich die E-Mail-Adresse als verschlüsselten Quellcode generieren lassen. Zu finden unter (Einstellungen -> Mail-Crypter).

**Beispiel:**

1. E-Mail-Adresse mit HTML verschlüsseln:

1.1. ohne Linktext:
Code: `[mail_crypt mail="deine@mail-adresse.de"]`
Ausgabe: [deine@mail-adresse.de](deine@mail-adresse.de)

1.2. mit Linktext:
Code: `[mail_crypt mail="deine@mail-adresse.de" text="Dein Name"]`
Ausgabe: [Dein Name](deine@mail-adresse.de)

2. E-Mail-Adresse mit Javascript verschlüsseln:

2.1. ohne Linktext:
Code: `[mail_crypt mail="deine@mail-adresse.de" js="true"]`
Ausgabe: [deine@mail-adresse.de](deine@mail-adresse.de)

2.2. mit Linktext:
 Code: `[mail_crypt mail="deine@mail-adresse.de" text="Dein Name" js="true"]`
 Ausgabe: [Dein Name](deine@mail-adresse.de)

== Installation ==
1. Plugin Dateien in den Ordner `/wp-content/plugins/mail-crypter` hochladen, oder im Backend direkt im Plugin-Manager nach "Mail-Crypter" suchen.
2. Plugin aktivieren
3. Nun einfach den `[mail_crypt]` Shortcode in Beiträgen und Seiten benutzen.

== Frequently Asked Questions ==

== Screenshots ==
1. Im Menü E-Mail-Adressen verschlüsseln und Code generieren.
2. Im Editor einfach einen Shortcode einfügen.
3. Beispielanwendung im Editor.
4. Beispielanwendung aus Sicht des Webseiten-Nutzer.
5. Im Quellcode der Seite ist die E-Mail-Adresse verschlüsselt.

== Changelog ==
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