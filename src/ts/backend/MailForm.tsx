import React, {ChangeEvent, FormEvent, MouseEvent, Fragment} from "react";
import FormComponent, {FormAlert, InputObject, StateValues} from "./FormComponent";
import FormInput, {FormType} from "./FormInput";
import * as EmailValidator from "email-validator";
import MailEncrypt from "../MailEncrypt";

interface MailFormProps {

}

interface MailFormState extends StateValues {
    email: InputObject<string>
    type: string,
    encrypted: string,
    alert: FormAlert
}

export default class MailForm extends FormComponent<MailFormProps, MailFormState>
{

    constructor(props : MailFormProps) {
        super(props);

        this.state = {
            email: {value: "", error: {active: false}},
            type: 'with',
            encrypted: '',
            alert: {active: false}
        }

        this.submit = this.submit.bind(this);
        this.click = this.click.bind(this);
        this.select = this.select.bind(this);
        this.encrypt = this.encrypt.bind(this);
    }

    update(id: keyof MailFormState, value: any) {
        super.update(id, value);
    }

    submit(e : FormEvent<HTMLFormElement>) : void {
        e.preventDefault();
        this.encrypt();
    }

    click(e : MouseEvent<HTMLButtonElement>) : void {
        e.preventDefault();
        this.encrypt();
    }

    encrypt() : void {
        let correct : boolean = true;

        if(this.state.email.value === "") {
            correct = false;
            this.setState({email: {value: "", error: {active: true, msg: "Bitte gib E-Mail an"}}});
        }

        if(!EmailValidator.validate(this.state.email.value)) {
            correct = false;
            this.setState({email: {value: this.state.email.value, error: {active: true, msg: "Bitte gib E-Mail an"}}});
        }

        if(!correct) return;

        const encrypted = MailEncrypt.encrypt(this.state.email.value);

        let html;
        if(this.state.type === "with") {
            html = `<a href="mailto:${encrypted}">${encrypted}</a>`;
        } else {
            html = encrypted;
        }

        this.setState({
            encrypted: html
        });

        console.log("ne");
    }

    async select(e: ChangeEvent<HTMLInputElement>) : Promise<void> {
        await this.setState({
            type: e.target.value
        })
    }

    render() : JSX.Element {
        return (
            <Fragment>
                <form onSubmit={this.submit}>
                    <fieldset className="mail-encrypt-form-group">
                        <label>E-Mail-Adresse</label>
                        <FormInput
                            className="mail-encrypt-input"
                            update={this.update}
                            value={this.state.email}
                            id="email"
                            type={FormType.Email}
                            placeholder="E-Mail"
                        />
                    </fieldset>
                    <fieldset className="mail-encrypt-form-group">
                        <label className="mail-encrypt-radio">
                            <input type="radio" value="with" checked={this.state.type === "with"} onChange={this.select} />
                            With
                        </label>
                        <label className="mail-encrypt-radio">
                            <input type="radio" value="without" checked={this.state.type === "without"} onChange={this.select} />
                            Without
                        </label>
                    </fieldset>
                    <fieldset className="mail-encrypt-form-group">
                        <button onClick={this.click}>Encrypt</button>
                    </fieldset>
                </form>
                <form>
                    <fieldset className="mail-encrypt-form-group">
                        <h2>Ausgabe</h2>
                        <textarea className="mail-encrypt-input" rows={5} defaultValue={this.state.encrypted} />
                    </fieldset>
                    <fieldset className="mail-encrypt-form-group">
                        <label>Auf der Seite</label>
                        <span className="mail-encrypt-pre">{this.state.encrypted}</span>
                    </fieldset>
                    <fieldset className="mail-encrypt-form-group">
                        <label>Quellcode:</label>
                        <pre className="mail-encrypt-pre">{this.state.encrypted}</pre>
                    </fieldset>
                </form>

            </Fragment>
        );
    }

}