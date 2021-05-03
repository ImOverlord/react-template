import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RouteProps } from 'react-router';

interface IProps extends RouteProps { }

interface IState { }

export class HomePage extends Component<IProps, IState> {

    public render(): JSX.Element {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1> Home </h1>
                    </Col>
                </Row>
            </Container>
        );
    }

}
