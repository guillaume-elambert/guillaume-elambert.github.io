import React from 'react';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

import { Container } from '..';
import wavingHand from '../../../assets/waving-hand-emoji.png';

import './Hero.css';

export function Hero(props) {
    return (
        <Jumbotron as={Container} className="bg-transparent jumbotron-fluid p-0">
            <div className="justify-content-center">
                <Col md="fit">
                    <div className="d-flex mb-3">
                        {
                            props.title &&
                            <h1 className="display-1 font-weight-bolder my-auto mr-5">
                                {props.title}
                            </h1>
                        }

                        <Image className="heroIcon waving my-auto" src={wavingHand} alt="Waving hand emoji"></Image>
                    </div>
                    {props.subTitle && <h3 className="display-4 font-weight-light mb-4">{props.subTitle}</h3>}
                    {props.text && <h3 className="font-weight-light">{props.text}</h3>}
                </Col>
            </div>
        </Jumbotron>
    );
}

export default Hero;