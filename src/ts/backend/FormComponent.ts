import { Component } from "react";

export type FormInputError = {
    active: boolean,
    msg?: string
}

export interface FormButton {
    element : JSX.Element,
    disabled : boolean
}

export interface FormAlert {
    element?: JSX.Element,
    active: boolean
}

export class InputObject<T> {
    value!: T;
    error!: FormInputError;
}

export type StateValues = {
    [P : string] : InputObject<string> | any;
}

export default class FormComponent<T, S extends StateValues> extends Component<T, S>
{

    constructor(props : T) {
        super(props);

        this.update = this.update.bind(this);
    }

    update(id : keyof S, value : any) : void
    {
        if(typeof this.state[id] === "object" && typeof this.state[id].value !== "undefined") {
            value = {value: value, error: {active: false, msg: ""}};
        }

        this.setState({
            [id]: value
        } as Pick<S, keyof S>);
    }

}