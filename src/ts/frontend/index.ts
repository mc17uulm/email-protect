/**
 *
 */
import MailEncrypt from "../MailEncrypt";

class MailEncryptFrontend {

    public static register() : void {
        const links = document.querySelectorAll('a[name=mail-encrypt-tag]');
        const hidden = document.querySelectorAll('a[class=mail-encrypt-body]');
        links.forEach((elem: HTMLElement) => {
           elem.addEventListener('click', MailEncryptFrontend.onclick);
           elem.innerText = MailEncrypt.decrypt(elem.innerText);
        });
        hidden.forEach((elem: HTMLElement) => {
            elem.innerText = elem.attributes.getNamedItem('content').value;
        })
    }

    public static onclick(e : MouseEvent) : void {
        if(e.target instanceof HTMLElement) {
            e.preventDefault();
            window.location.href = `mailto:${MailEncrypt.decrypt(e.target.getAttribute('value'))}`;
        }
    }

}

(() => {
    MailEncryptFrontend.register();
})();