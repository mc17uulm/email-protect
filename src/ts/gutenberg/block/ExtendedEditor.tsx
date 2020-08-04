import { Component } from  "@wordpress/element";
import { Fragment } from "@wordpress/element";
import { toggleFormat, Value } from '@wordpress/rich-text';
import ToolbarButton from "./ToolbarButton";
import MailPopover, {MailPopoverValues} from "./MailPopover";
import React from "react";
import * as EmailValidator from 'email-validator';
import MailEncrypt from "../../MailEncrypt";

interface ExtendedEditorProps {
    onChange: (val: any) => any,
    isActive: boolean,
    value: Value
}

interface ExtendedEditorState {
    visible: boolean,
    mail: string,
    text: string
}

export default class ExtendedEditor extends Component<ExtendedEditorProps, ExtendedEditorState>
{

    constructor(props : ExtendedEditorProps) {
        super(props);

        this.state = {
            visible: false,
            mail: '',
            text: ''
        };

        this.onToggle = this.onToggle.bind(this);
        this.toggle = this.toggle.bind(this);
        this.update = this.update.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.save = this.save.bind(this);
    }

    async onToggle() : Promise<void> {
        if(this.props.isActive) {
            await this.setState({
                visible: false,
                mail: '',
                text: ''
            });
            await this.toggle();
        } else {
            const selected = this.props.value.text.substring(this.props.value.start, this.props.value.end);
            if(EmailValidator.validate(selected)) {
                await this.setState({
                    mail: selected
                });
            } else {
                await this.setState({
                    text: selected
                });
            }
            this.setState({visible: true});
        }
    }

    async toggle(mail: string = '', text: string = '') : Promise<void> {
        await this.props.onChange(
            toggleFormat(this.props.value, {
                type: 'mail-encrypt/encrypt',
                attributes: {
                    href: `mailto:${mail}`
                }
            })
        );
    }

    async save() : Promise<void> {
        const mail : string = MailEncrypt.encrypt(this.state.mail);
        let text : string = this.state.text;
        if(text === '') {
            text = mail;
        }
        await this.hide();
        await this.toggle(mail, text);
    }

    async hide() : Promise<void> {
        await this.setState({
            visible: false,
            mail: '',
            text: ''
        });
    }

    async show() : Promise<void> {
        await this.setState({visible: true});
    }

    async update(id : keyof MailPopoverValues, value : any) : Promise<void> {
        await this.setState({
            [id]: value
        } as Pick<MailPopoverValues, keyof MailPopoverValues>);
    }

    render() {
        return (
            <Fragment>
                <ToolbarButton
                    active={this.props.isActive}
                    action={this.onToggle}
                />
                <MailPopover
                    visible={this.state.visible}
                    mail={this.state.mail}
                    text={this.state.text}
                    update={this.update}
                    show={this.show}
                    hide={this.hide}
                    save={this.save}
                />
            </Fragment>
        );
    }

}