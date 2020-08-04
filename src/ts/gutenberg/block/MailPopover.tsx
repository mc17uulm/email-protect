import { Component } from "@wordpress/element";
import {URLPopover } from "@wordpress/block-editor";
import { TextControl, Button } from "@wordpress/components";
import React, {MouseEvent} from "react";
import * as EmailValidator from 'email-validator';

interface MailPopoverProps {
    update: (id: keyof MailPopoverValues, value: string) => void,
    save: () => void,
    show: () => void,
    hide: () => void,
    visible: boolean,
    mail: string,
    text: string
}

interface MailPopoverState {}

export interface MailPopoverValues {
    mail: string,
    text: string
}

export default class MailPopover extends Component<MailPopoverProps, MailPopoverState>
{

    constructor(props : MailPopoverProps) {
        super(props);

        this.update_link = this.update_link.bind(this);
        this.update_text = this.update_text.bind(this);
        this.click = this.click.bind(this);
    }

    async update_link(email: string) {
        await this.props.update('mail', email);
    }

    async update_text(text: string) {
        await this.props.update('text', text);
    }

    click(e : MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        this.props.save();
    }

    render() {
        if(this.props.visible) {
            const valid = !EmailValidator.validate(this.props.mail);
            return (
                <URLPopover
                    onClose={this.props.hide}
                >
                    <div className="block-editor-link-control">
                        <form>
                            <h3 style={{marginLeft: "15px"}}>Mail Encrypt</h3>
                            <span style={{marginLeft: "15px"}}>E-Mail-Adresse</span>
                            <TextControl
                                className="block-editor-link-control__search-input"
                                placeholder="E-Mail-Adresse einfügen"
                                type="text"
                                onChange={this.update_link}
                                value={this.props.mail}
                            />
                            <span style={{marginLeft: "15px"}}>Text (optional)</span>
                            <TextControl
                                className="block-editor-link-control__search-input"
                                placeholder="(optional) Text einfügen"
                                value={this.props.text}
                                type="text"
                                onChange={this.update_text}
                            />
                            <Button
                                isSecondary
                                label="Schließen"
                                onClick={this.props.hide}
                                style={{
                                    marginLeft: "15px",
                                    marginBottom: "15px"
                                }}
                            >
                                Schließen
                            </Button>
                            <Button
                                isPrimary
                                label="Sichern"
                                onClick={this.click}
                                disabled={valid}
                                style={{
                                    float: "right",
                                    marginRight: "15px",
                                    marginBottom: "15px"
                                }}
                            >
                                Sichern
                            </Button>
                        </form>
                    </div>

                </URLPopover>
            );
        }
        return "";
    }

}

/**
 <Popover>
 Insert protected mail address
 <form>
 <TextControl
 label="Mail address"
 id="mail"
 value={this.props.selected}
 onChange={(val) => this.props.update("mail", val)}
 />
 <TextControl
 label="Link text"
 id="text"
 value={this.props.selected}
 onChange={(val) => this.props.update("text", val)}
 />
 </form>
 <form onSubmit={this.submit}>
 <input
 id="mail"
 type="email"
 value={this.props.mail}
 onChange={this.update}
 />
 <input
 id="text"
 type="text"
 value={this.props.text}
 onChange={this.update}
 />
 <Button
 label="Speichern"
 type="submit"
 />
 </form>
 </Popover>*/