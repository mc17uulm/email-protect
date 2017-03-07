$(document).ready(function(){
	var url = window.location.protocol + "//" + window.location.host + "/wp-content/plugins/mail-crypter/crypt.php";
	$('#submit_btn').click(function(){
		var proceed = true;
		$("#mail_form input[required=true]").each(function(){
			$(this).css('border-color', '');
			if(!$.trim($(this).val())){
				$(this).css('border-color', 'red');
				proceed = false;
			}

			var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if($(this).attr("type") == "email" && !email_reg.test($.trim($(this).val()))){
				$(this).css('border-color', 'red');
				proceed = false;
			}
		});

		if(proceed){
			var type = $('input[name=tag]:checked').val();
			var email = $('input[name=email]').val();

			$.ajax({
				type: 'POST',
				url: url,
				data: {'email': email, 'type': type},
				success: function(data){
					console.log(data);
					$('#output').val(data);
					$('#post').html(data);
				},
				error: function(data){
					console.log(data);
					$('#output').val(data);
					$('#post').html("Error!");
				}
			});
		}
	});

	$("#mail_form input[required=true]").keyup(function(){
		$(this).css('border-color', '');
		$("#result").slideUp();
	});
});
