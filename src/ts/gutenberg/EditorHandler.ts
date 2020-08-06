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

    private static tag = 'mail-encrypt-body';
    private static indicator = 'mail-encrypt-indicator';

    public static load_content(contents : (Content | string) []) : (Content | string) []
    {
        if(contents.length > 0) {
            if(typeof contents[0] !== "string") {
                if(contents[0].type === 'p' && contents[0].props.class === "wp-block-mail-encrypt-block") {
                    contents = contents[0].props.children;
                }
            }
            return contents.map((el: Content) => {
                if(el.type === 'a' && el.props.class === this.tag) {
                    return {
                        type: 'span',
                        props: {
                            children: el.props.children,
                            class: this.indicator
                        }
                    };
                } else {
                    return el;
                }
            });
        }
        return contents;
    }

    public static onchange(contents : (Content | string) []) : (Content | string) [] {
        let content = [];
        contents.forEach((el : Content | string) => {
            if(typeof el === "string") {
                content = content.concat(this.handle_string(el));
            } else if(el.type === "span" && el.props.class === this.indicator) {
                const value = el.props.children[0];
                console.log("span value: ", value);
                if(EmailValidator.validate(value)) {
                    content.push(el);
                } else {
                    content.push(value);
                }
            } else {
                content.push(el);
            }
        });
        return content;
    }

    private static handle_string(str : string) : (Content | string) [] {
        const parts = str.split(" ");
        let str_ = "";
        let content = [];
        parts.forEach((part, i) => {
            if(EmailValidator.validate(part)) {
                content.push(str_);
                str_ = "";
                content.push({
                    type: 'span',
                    props: {
                        children: part,
                        class: this.indicator
                    }
                });
                content.push(" ");
            } else {
                if(i < parts.length - 1) {
                    str_ += `${part} `;
                } else {
                    str_ += part;
                }
            }
        });
        content.push(str_);
        return content;
    }

    public static save(contents : Content[]) : Content[]
    {
        let content = [];
        contents.forEach((el : Content | string) => {
            if(typeof el !== "string") {
                if(el.type === "span" && el.props.class === this.indicator) {
                    const encrypted = MailEncrypt.encrypt(el.props.children[0]);
                    console.log("save value: ", el.props.children[0]);
                    content.push({
                        type: 'a',
                        props: {
                            children: [encrypted],
                            href: `mailto:${encrypted}`,
                            class: this.tag
                        }
                    });
                } else {
                    content.push(el);
                }
            } else {
                content.push(el);
            }
        });

        if(content[0].type === 'p' && content[0].props.class === "wp-block-mail-encrypt-block") {
            return content;
        } else {
            return [{
                type: 'p',
                props: {
                    class: "wp-block-mail-encrypt-block",
                    children: content
                }
            }];
        }
    }

}