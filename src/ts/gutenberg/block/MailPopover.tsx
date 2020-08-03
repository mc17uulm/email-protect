import { Component } from "@wordpress/element";
import { Popover, TextControl, Button } from "@wordpress/components";
import React from "react";

interface MailPopoverProps {
    update: (id: keyof MailPopoverValues, value: string) => void,
    visible: boolean,
    selected: string
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
    }

    render() {
        return this.props.visible ? (
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
            </Popover>
        ) : "";
    }

}