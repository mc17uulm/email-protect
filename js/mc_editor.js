(() =>  {
    tinymce.PluginManager.add('mc_mce_button', function (editor, url) {
        editor.addButton('mc_mce_button', {
			title: "Add secure email address",
			image: url + '/../img/icon.png',
			onclick: function () {
				editor.windowManager.open({
					title: 'Add mail crypter shortcode',
					body: [{
						type: 'textbox',
						name: 'mail',
						label: "Email address",
						value: ''
					}, {
						type: 'textbox',
						name: 'label',
						label: 'Link label',
						values: ''
					}, {
						type: 'radio',
						name: 'js',
						label: 'Secure via javascript',
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
