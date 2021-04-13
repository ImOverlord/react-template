import React, { Component } from 'react';
import './style.css';

interface IProps {
    message: string
}

interface IState { }

export class HomePage extends Component<IProps, IState> {

    public render() {
        return (<h1>Home</h1>)
    }

}
