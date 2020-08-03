class Backend
{

    public static encrypt(str : string) : string
    {
        return str
            .split("")
            .map((char : string) => {
                return char.charCodeAt(0);
            })
            .reduce((carry : string, item : number) => {
                return `${carry}&#${item};`;
            }, "");
    }

    public static register_form() : void {

        const submit_btn = document.getElementById('mail_enc_submit_btn');
        submit_btn.addEventListener('click', Backend.submit);
        document.querySelector('#mail_enc_form input[required=true]').addEventListener('keyup', Backend.keyup);
    }

    static keyup(e: KeyboardEvent) : void {
        if(e.target instanceof HTMLInputElement) {
            e.target.style.borderColor = '';
        }
    }

    static submit(e : MouseEvent) : void {
        e.preventDefault();

        const valid : boolean = Array.from(document
            .querySelectorAll('#mail_enc_form input[required]'))
            .map((elem : HTMLInputElement) => {
                elem.style.borderColor = 'red';

                const mail_regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(elem.value === "") return false;
                if(
                    elem.getAttribute('type') === "email" &&
                    !mail_regex.test(elem.value)
                ) {
                    return false;
                }
                elem.style.borderColor = '';
                return true;
            })
            .reduce((p : boolean, n : boolean) => p && n);

        if(valid) {
            const email = document.querySelector('input[name=mail_enc_email]').nodeValue;
            const type = document.querySelector('input[name=tag]:checked').nodeValue;
            const enc_email = this.encrypt(email);

            let output : string;
            if(type === "0") {
                output = enc_email;
            } else {
                output = `<a href="${this.encrypt(`mailto:${email}`)}">${enc_email}</a>`;
            }

            document.querySelector('#mail_enc_output').nodeValue = output;
            document.querySelector('#mail_enc_post').innerHTML = output;
            document.querySelector('#mail_enc_source').innerHTML = `<span style="white-space: pre;">${output}</span>`;
        }

    }

}

(() => {

    Backend.register_form();

})();