export default class Backend
{

    public encrypt_to_ascii(str : string) : string
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

    public encrypt_by_caesar(str : string) : string
    {
        return str
            .split("")
            .map((char : string) => {
                return String.fromCharCode(char.charCodeAt(0) + 2);
            })
            .join("");
    }

}