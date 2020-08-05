import React, {Component, Fragment} from "react";
import MailForm from "./MailForm";
import '../../style/index.scss';

interface AppProps {}
interface AppState {}

export default class App extends Component<AppProps, AppState> {

    constructor(props : AppProps) {
        super(props);
    }

    render() : JSX.Element {
        return (
            <Fragment>
                <h1>Mail Encrypt</h1>
                <small>Version 3.0</small>
                <p>Encrypt your mail addresses</p>
                <MailForm />
            </Fragment>
        );
    }

}