/**
 *
 */
var MailEncryptFrontend = /** @class */ (function () {
    function MailEncryptFrontend() {
    }
    MailEncryptFrontend.register = function () {
        var _this = this;
        var links = document.querySelectorAll('a[name=mail-encrypt-tag]');
        links.forEach(function (elem) {
            elem.addEventListener('click', MailEncryptFrontend.onclick);
            elem.innerText = _this.decrypt(elem.innerText);
        });
    };
    MailEncryptFrontend.onclick = function (e) {
        if (e.target instanceof HTMLElement) {
            e.preventDefault();
            window.location.href = "mailto:" + MailEncryptFrontend.decrypt(e.target.getAttribute('value'));
        }
    };
    MailEncryptFrontend.decrypt = function (str) {
        return str
            .split("")
            .map(function (char) {
            return String.fromCharCode(char.charCodeAt(0) - 2);
        })
            .join("");
    };
    return MailEncryptFrontend;
}());
(function () {
    MailEncryptFrontend.register();
})();
//# sourceMappingURL=mail-encrypt-frontend.js.map