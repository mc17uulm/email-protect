import * as EmailValidator from "email-validator";
import MailEncrypt from "../MailEncrypt";

interface Content {
    type: string,
    props?: {
        class?: string,
        children?: any[]
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

    public static onchange(arr : (Content | string) []) : (Content | string) [] {
        let cleared_arr = this.clear_value(arr);
        let content = [];
        cleared_arr.forEach((el : Content | string) => {
            if(typeof el === "string") {
                content = content.concat(this.handle_string(el));
            } else {
                content.push(el);
            }
        });
        return content;
    }

    private static clear_value(arr : (Content | string) []) : (Content | string) [] {
        let content = [];
        let tmp_str = "";
        for(let i = 0; i < arr.length; i++) {
            let el = arr[i];
            if(typeof el === "string") {
                tmp_str += el;
            } else if(el.type === "span" && el.props.class === this.indicator) {
                tmp_str += el.props.children[0];
            } else {
                content.push(tmp_str);
                tmp_str = "";
                content.push(el);
            }
        }
        content.push(tmp_str);
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
                if(i < parts.length - 1) {
                    content.push(" ");
                }
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

    public static save(arr : Content[]) : Content[]
    {
        let contents = arr;
        if(contents[0].type === 'p' && contents[0].props.class === "wp-block-mail-encrypt-block") {
            contents = contents[0].props.children;
        }
        let content = [];
        contents.forEach((el : Content | string) => {
            if(typeof el !== "string") {
                if(
                    (el.type === "span" && el.props.class === this.indicator) ||
                    (el.type === "a" && el.props.class === this.tag)
                ) {
                    const str = typeof el.props.children === "string" ? el.props.children : el.props.children[0];
                    const encrypted = MailEncrypt.encrypt(str);
                    content.push({
                        type: 'a',
                        props: {
                            children: [encrypted],
                            href: `${MailEncrypt.encrypt('mailto:')}${encrypted}`,
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

        return [{
            type: 'p',
            props: {
                class: "wp-block-mail-encrypt-block",
                children: content
            }
        }];
    }

}