class Frontend {

    public static register() : void {
        const links = document.querySelectorAll('a [name=mail-encrypt-tag]');
        links.forEach((elem: HTMLElement) => {
           elem.addEventListener('click', Frontend.onclick);
           elem.innerText = this.decrypt(elem.innerText);
        });
    }

    public static onclick(e : MouseEvent) : void {
        if(e.target instanceof HTMLInputElement) {
            e.preventDefault();
            window.location.href = `mailto:${Frontend.decrypt(e.target.getAttribute('value'))}`;
        }
    }

    public static decrypt(str : string) : string
    {
        return str
            .split("")
            .map((char : string) => {
                return String.fromCharCode(char.charCodeAt(0) - 2);
            })
            .join("");
    }

}

(() => {
    Frontend.register();
})();