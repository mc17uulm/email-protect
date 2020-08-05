import * as EmailValidator from "email-validator";
import MailEncrypt from "../MailEncrypt";

interface Content {
    type: string,
    props?: {
        class?: string,
        children?: any[],
        content?: string,
        href?: string
    }
}

export default class EditorHandler
{

    private static classname = 'mail-encrypt-body';

    public static load_content(contents : Content[]) : Content[]
    {
        return contents.map((el: Content) => {
            if(el.type === 'a' && el.props.class === this.classname) {
                return el.props.children[0];
            } else {
                return el;
            }
        });
    }

    public static save(contents : Content[]) : Content[]
    {
        let renderedContent = [];
        contents.forEach((el : Content | string) => {
            if(typeof el === "string") {
                const parts = el.split(" ");
                let str_ = "";
                parts.forEach((part, i) => {
                    if(EmailValidator.validate(part)) {
                        renderedContent.push(str_);
                        str_ = " ";
                        const encrypted = MailEncrypt.encrypt(part);
                        renderedContent.push({
                            type: 'a',
                            props: {
                                children: [encrypted],
                                href: `mailto:${encrypted}`,
                                class: 'mail-encrypt-body'
                            }
                        });
                    } else {
                        if(i < parts.length - 1) {
                            str_ += `${part} `;
                        } else {
                            str_ += part;
                        }
                    }
                });
                renderedContent.push(str_);
            } else {
                renderedContent.push(el);
            }
        });
        return renderedContent;
    }

}