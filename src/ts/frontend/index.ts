/**
 * Copyright (c) 2020. mc17
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import MailEncrypt from "../MailEncrypt";

class MailEncryptFrontend {

    public static register() : void {
        const links = document.querySelectorAll('a[name=mail-encrypt-tag]');
        links.forEach((elem: HTMLElement) => {
           elem.addEventListener('click', MailEncryptFrontend.onclick);
           elem.innerText = MailEncrypt.decrypt(elem.innerText);
        });
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