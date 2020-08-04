import { Component } from  "@wordpress/element";
import {BlockIcon, RichTextToolbarButton} from '@wordpress/block-editor';
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
                icon="post-status"
                title="Mail Encrypt"
                isActive={this.props.active}
                onClick={this.props.action}
            />
        );
    }

}