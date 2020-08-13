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

(() =>  {
    tinymce.PluginManager.add('mail_encrypt_mce_button', function (editor, url) {
        editor.addButton('mail_encrypt_mce_button', {
            title: editor.getLang('mc.title', 'Add MailEncrypt shortcode'),
            image: url + '/../img/icon.png',
            onclick: function () {
                editor.windowManager.open({
                    title: editor.getLang('mc.title', 'Add MailEncrypt shortcode'),
                    body: [{
                        type: 'textbox',
                        name: 'mail',
                        label: editor.getLang('mc.mail_label', "Email address"),
                        value: ''
                    }, {
                        type: 'textbox',
                        name: 'label',
                        label: editor.getLang('mc.link_label', 'Link label'),
                        values: ''
                    }],
                    onsubmit: function(e) {
                        editor.insertContent(
                            '[mail_encrypt mail=&quot;' +
                            e.data.mail +
                            '&quot; text=&quot;' +
                            e.data.label +
                            '&quot;]'
                        );
                    }
                });
            }
        });
    });
})();