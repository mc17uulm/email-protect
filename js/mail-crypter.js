jQuery(document).ready(() => {

    const encrypt = (code) => {
        let out = "";
        for(let i = 0; i < code.length; i++){
            out += String.fromCharCode(code.charCodeAt(i)-2);
        }
        return out;
    };

    jQuery('a[name=mail-encrypt-href]').each((i, e) => {
        jQuery(e).text(encrypt(jQuery(e).text()));
    });

    jQuery('a[name=mail-encrypt-href]').on('click', (e) => {
        e.preventDefault();
        window.location.href = "mailto:" + encrypt(jQuery(e.target).attr('value'));
    });
});
