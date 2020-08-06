export default class MailEncrypt
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