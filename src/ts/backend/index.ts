import MailEncrypt from "../MailEncrypt";

class MailEncryptBackend
{

    public static register_form() : void {

        const submit_btn = document.getElementById('mail-encrypt-submit-btn');
        const mail_input = document.getElementById('mail-encrypt-email-field');
        submit_btn.addEventListener('click', MailEncryptBackend.submit);
        mail_input.addEventListener('keyup', MailEncryptBackend.keyup);
    }

    static keyup(e: KeyboardEvent) : void {
        if(e.target instanceof HTMLInputElement) {
            e.target.style.borderColor = '';
        }
    }

    static submit(e : MouseEvent) : void {
        e.preventDefault();

        const mail_input =  document.getElementById('mail-encrypt-email-field');
        let valid = true;
        if(mail_input instanceof HTMLInputElement) {
            mail_input.style.borderColor = 'red';

            const mail_regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(
                mail_input.value === "" || (
                mail_input.getAttribute('type') === "email" &&
                !mail_regex.test(mail_input.value))
            ) {
                valid = false;
            } else {
                mail_input.style.borderColor = '';
            }

            if(valid) {
                const email = mail_input.value;
                // @ts-ignore
                const type = document.querySelector('input[name=mail-encrypt-type]:checked').value;
                const enc_email = MailEncrypt.encrypt(email);

                let output : string;
                console.log(type);
                if(type === "0") {
                    output = enc_email;
                } else {
                    output = `<a href="${MailEncrypt.encrypt(`mailto:${email}`)}">${enc_email}</a>`;
                }

                // @ts-ignore
                document.querySelector('#mail-encrypt-output-field').value = output;
                document.querySelector('#mail-encrypt-html-field').innerHTML = `
                    <p>
                        ${output}
                    </p>
                `;
                document.querySelector('#mail-encrypt-source-field').innerHTML = `
                    <p>
                        <xmp style="display: block; overflow: auto">${output}</xmp>
                    </p>
                `;
            }
        }

    }

}

(() => {

    MailEncryptBackend.register_form();

})();