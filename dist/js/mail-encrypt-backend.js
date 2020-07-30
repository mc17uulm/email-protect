var MailEncryptBackend = /** @class */ (function () {
    function MailEncryptBackend() {
    }
    MailEncryptBackend.encrypt = function (str) {
        return str
            .split("")
            .map(function (char) {
            return char.charCodeAt(0);
        })
            .reduce(function (carry, item) {
            return carry + "&#" + item + ";";
        }, "");
    };
    MailEncryptBackend.register_form = function () {
        var submit_btn = document.getElementById('mail_enc_submit_btn');
        submit_btn.addEventListener('click', MailEncryptBackend.submit);
        document.querySelector('#mail_enc_form input[required=true]').addEventListener('keyup', MailEncryptBackend.keyup);
    };
    MailEncryptBackend.keyup = function (e) {
        if (e.target instanceof HTMLInputElement) {
            e.target.style.borderColor = '';
        }
    };
    MailEncryptBackend.submit = function (e) {
        e.preventDefault();
        var valid = Array.from(document
            .querySelectorAll('#mail_enc_form input[required]'))
            .map(function (elem) {
            elem.style.borderColor = 'red';
            var mail_regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (elem.value === "")
                return false;
            if (elem.getAttribute('type') === "email" &&
                !mail_regex.test(elem.value)) {
                return false;
            }
            elem.style.borderColor = '';
            return true;
        })
            .reduce(function (p, n) { return p && n; });
        if (valid) {
            var email = document.querySelector('input[name=mail_enc_email]').nodeValue;
            var type = document.querySelector('input[name=tag]:checked').nodeValue;
            var enc_email = this.encrypt(email);
            var output = void 0;
            if (type === "0") {
                output = enc_email;
            }
            else {
                output = "<a href=\"" + this.encrypt("mailto:" + email) + "\">" + enc_email + "</a>";
            }
            document.querySelector('#mail_enc_output').nodeValue = output;
            document.querySelector('#mail_enc_post').innerHTML = output;
            document.querySelector('#mail_enc_source').innerHTML = "<span style=\"white-space: pre;\">" + output + "</span>";
        }
    };
    return MailEncryptBackend;
}());
(function () {
    MailEncryptBackend.register_form();
})();
//# sourceMappingURL=mail-encrypt-backend.js.map