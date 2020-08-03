import { Component } from  "@wordpress/element";
import { Fragment } from "@wordpress/element";
import { toggleFormat } from '@wordpress/rich-text';
import ToolbarButton from "./ToolbarButton";
import MailPopover, {MailPopoverState} from "./MailPopover";
import React from "react";

interface ExtendedEditorProps {
    onChange: (val: any) => any,
    isActive: boolean,
    value: any
}

interface ExtendedEditorState {
    visible: boolean
}

export default class ExtendedEditor extends Component<ExtendedEditorProps, ExtendedEditorState>
{

    constructor(props : ExtendedEditorProps) {
        super(props);

        this.state = {
            visible: false
        };

        this.onToggle = this.onToggle.bind(this);
        this.add = this.add.bind(this);
    }

    async onToggle() {
        const visible = !this.state.visible;
        await this.setState({visible: visible});
        this.props.onChange(
            toggleFormat(this.props.value, {
                type: 'mail-encrypt/encrypt',
                attributes: {
                    classname: 'mail-encrypt-str'
                }
            })
        );
    }

    add(state : MailPopoverState) {
        console.log(state);
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
                    submit={this.add}
                />
            </Fragment>
        );
    }

}