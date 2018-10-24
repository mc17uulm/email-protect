(() =>  {
    tinymce.PluginManager.add('mc_mce_button', function (editor, url) {
        console.log(editor.getLang('mc.title'));
        editor.addButton('mc_mce_button', {
			title: editor.getLang('mc.title', 'Add mail crypter shortcode'),
			image: url + '/../img/icon.png',
			onclick: function () {
				editor.windowManager.open({
					title: editor.getLang('mc.title', 'Add mail crypter shortcode'),
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
					}, {
						type: 'radio',
						name: 'js',
						label: editor.getLang('mc.js_label', 'Secure via javascript'),
						value: ''
					}],
					onsubmit: function(e) {
						editor.insertContent(
							'[mail_crypt mail=&quot;' +
							e.data.mail +
							'&quot; text=&quot;' +
							e.data.label +
							'&quot; js=&quot;' +
							e.data.js +
							'&quot;]' 
						);
					}
				});
			}
		});
	});
})();
