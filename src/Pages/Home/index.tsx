import { Component } from 'react';
import './style.css';

interface IProps { }

interface IState { }

export class HomePage extends Component<IProps, IState> {

    public render(): JSX.Element {
        return (<h1>Home</h1>);
    }

}
