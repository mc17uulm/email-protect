/**
 * Copyright (c) 2021 CodeLeaf
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

const decrypt = (str : string) : string => {
    return str
        .split("")
        .map((char : string) => String.fromCharCode(char.charCodeAt(0) - 2))
        .join("")
    ;
}

const addressSelector = 'data-mail-protect';
const clickSelector = 'data-mail-protect-click';

const addresses : NodeListOf<HTMLSpanElement> = document.querySelectorAll(`[${addressSelector}]`);
const clicks : NodeListOf<HTMLAnchorElement> = document.querySelectorAll(`[${clickSelector}]`);

clicks.forEach((elem : HTMLAnchorElement) => {
   elem.addEventListener('click', (e) => {
       e.preventDefault();
       window.location.href = 'mailto:' + decrypt(elem.getAttribute(clickSelector) ?? "");
   });
});

addresses.forEach((elem : HTMLSpanElement) => {
    elem.textContent = decrypt(elem.getAttribute(addressSelector) ?? "");
});