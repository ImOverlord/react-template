import { Component } from "react";

interface IProps { }

interface IState { }

export class InvalidPage extends Component<IProps, IState> {

    render(): JSX.Element {
        return (<h1>Invalid</h1>);
    }

}
