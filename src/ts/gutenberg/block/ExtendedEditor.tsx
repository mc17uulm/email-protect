import { Component } from  "@wordpress/element";
import { Fragment } from "@wordpress/element";
import { toggleFormat, Value } from '@wordpress/rich-text';
import ToolbarButton from "./ToolbarButton";
import MailPopover, {MailPopoverValues} from "./MailPopover";
import React from "react";

interface ExtendedEditorProps {
    onChange: (val: any) => any,
    isActive: boolean,
    value: Value
}

interface ExtendedEditorState {
    visible: boolean,
    data: MailPopoverValues
    selected: string
}

export default class ExtendedEditor extends Component<ExtendedEditorProps, ExtendedEditorState>
{

    constructor(props : ExtendedEditorProps) {
        super(props);

        this.state = {
            visible: false,
            data : {
                mail: '',
                text: ''
            },
            selected: ''
        };

        this.onToggle = this.onToggle.bind(this);
        this.add = this.add.bind(this);
        this.toggle = this.toggle.bind(this);
        this.update = this.update.bind(this);
    }

    async onToggle() : Promise<void> {
        if(this.props.isActive) {
            await this.setState({
                visible: false,
                selected: ''
            });
            await this.toggle();
        } else {
            const selected = this.props.value.text.substr(this.props.value.start, this.props.value.end);
            await this.setState({selected: selected});
            this.setState({visible: true});
        }
    }

    async add(state : MailPopoverValues) : Promise<void> {
        await this.setState({
            data: {
                mail: state.mail,
                text: state.text
            },
            visible: false
        });
        await this.toggle();
    }

    async toggle() : Promise<void> {
        await this.props.onChange(
            toggleFormat(this.props.value, {
                type: 'mail-encrypt/encrypt',
                attributes: {
                    classname: 'mail-encrypt-str'
                }
            })
        );
    }

    update(id : keyof MailPopoverValues, value : string) : void {
        let d = this.state.data;
        d[id] = value;
        this.setState({
            data: d
        });
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
                    selected={this.state.selected}
                    update={this.update}
                />
            </Fragment>
        );
    }

}