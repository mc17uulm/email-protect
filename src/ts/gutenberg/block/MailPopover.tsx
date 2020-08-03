import { Component } from "@wordpress/element";
import { Popover, TextControl, Button } from "@wordpress/components";
import React from "react";

interface MailPopoverProps {
    submit: (state : MailPopoverState) => void,
    visible: boolean
}

export interface MailPopoverState {
    mail: string,
    text: string
}

export default class MailPopover extends Component<MailPopoverProps, MailPopoverState>
{

    constructor(props : MailPopoverProps) {
        super(props);

        this.state = {
            mail: '',
            text: ''
        };

        this.update_mail = this.update_mail.bind(this);
        this.update_text = this.update_text.bind(this);
        this.save = this.save.bind(this);
    }

    async update_mail(value) {
        await this.setState({mail: value});
    }

    async update_text(value) {
        await this.setState({text: value});
    }

    save(e) {
        e.preventDefault();

        this.props.submit(this.state);
    }

    render() {
        return this.props.visible ? (
            <Popover>
                Insert protected mail address
                <form onSubmit={this.save}>
                    <TextControl
                        label="Mail address"
                        id="mail"
                        value={this.state.mail}
                        onChange={this.update_mail}
                    />
                    <TextControl
                        label="Link text"
                        id="text"
                        value={this.state.text}
                        onChange={this.update_text}
                    />
                    <Button onClick={this.save}>
                        Sichern
                    </Button>
                </form>
            </Popover>
        ) : "";
    }

}