jQuery(document).ready(() => {

    const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    jQuery('#mc_submit_btn').on('click', (e) => {

        e.preventDefault();

        let p = true;
        jQuery('#mc_form input[required=true]').each((i, el) => {
            jQuery(el).css('border-color', '');
            if(
                !jQuery.trim(jQuery(el).val()) ||
                (jQuery(el).attr("type") === "email" &&
                    !regex.test(jQuery.trim(jQuery(el).val()))))
            {
                jQuery(el).css('border-color', 'red');
                p = false;
            }
        });

        if(p)
        {
            jQuery.ajax({
                type: 'POST',
                url: mc_links.ajax_url,
                data: {
                    "action": "mc_encrypt",
                    "email": jQuery('input[name=mc_email]').val(),
                    "type": jQuery('input[name=tag]:checked').val()
                },
                success: (d) => {
                    jQuery('#mc_output').val(d);
                    jQuery('#mc_post').html(d);
                    jQuery('#mc_source').html(`<xmp>${d}</xmp>`);
                },
                error: (d) => {
                    jQuery('#mc_output').val(d);
                    jQuery('#mc_post').val("ERROR!");
                }
            })
        }

    });

	jQuery("#mc_form input[required=true]").keyup(() => {
		jQuery(this).css('border-color', '');
	});
});
