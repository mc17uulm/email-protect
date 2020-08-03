import { Component } from  "@wordpress/element";
import { RichTextToolbarButton } from '@wordpress/block-editor';
import React from "react";

interface ToolbarButtonProps {
    active: boolean,
    action: () => {}
}

interface ToolbarButtonState {}

export default class ToolbarButton extends Component <ToolbarButtonProps, ToolbarButtonState> {

    constructor(props : ToolbarButtonProps) {
        super(props);
    }

    render() {
        return (
            <RichTextToolbarButton
                icon="editor-underline"
                title="Mail Encrypt"
                isActive={this.props.active}
                onClick={this.props.action}
            />
        );
    }

}