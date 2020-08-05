import React, {ChangeEvent, Component} from "react";
import {InputObject} from "./FormComponent";

export enum FormType {
    Text = "text",
    Email = "email",
    Number = "number",
    Date = "date",
    Password = "password"
}

interface FormInputProps {
    id: string,
    value: InputObject<any>,
    label?: string,
    type?: FormType,
    placeholder?: string,
    required: boolean,
    className: string,
    update: (id: any, value: string) => void
}

interface FormInputState {}

export default class FormInput extends Component<FormInputProps, FormInputState>
{

    static defaultProps = {
        type: FormType.Text,
        placeholder: "",
        required: false
    }

    constructor(props : FormInputProps)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: ChangeEvent<HTMLInputElement>)
    {
        e.preventDefault();
        this.props.update(this.props.id, e.target.value);
    }

    render() : React.ReactNode {
        return (
            <div className={"form-group" + (this.props.value.error.active ? " has-error" : "")}>
                {this.props.label ? (
                    <label>{this.props.label}</label>
                ) : ""}
                <input
                    type={this.props.type}
                    className={this.props.className}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    value={this.props.value.value}
                />
                {this.props.value.error.active ? (
                    <span className="mail-encrypt-help-block">{this.props.value.error.msg}</span>
                ) : ""}
            </div>
        );
    }

}