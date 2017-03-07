(function() {
	var url = window.location.protocol + window.location.host + "/wp-content/plugins/mail-crypter/";
    tinymce.PluginManager.add('mail_crypter_mce_button', function(editor, url) {
        editor.addButton('mail_crypter_mce_button', {
			title: "Verschlüsselte E-Mail einfügen",
			image: url + 'icon.png',
			onclick: function(){
				editor.windowManager.open({
					title: 'Füge E-Mail-Adresse hinzu',
					body: [{
						type: 'textbox',
						name: 'mail',
						label: "E-Mail-Adresse",
						value: ''
					}, {
						type: 'textbox',
						name: 'label',
						label: 'Linkbeschriftung',
						values: ''
					}, ],
					onsubmit: function(e){

						editor.insertContent(
								'[mail_crypt mail=&quot;' +
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
