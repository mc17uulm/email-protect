(() =>  {
    tinymce.PluginManager.add('mail_encrypt_mce_button', function (editor, url) {
        console.log(editor.getLang('mc.title'));
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