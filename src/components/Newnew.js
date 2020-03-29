import React from 'react';
import { Card, CardDeck, Row, Col, Button } from "react-bootstrap";

const Newnew =(props) => {
    return (
        <div className="container text-center">
            <h2>What's New</h2>
            <CardDeck>
                <Card>  
                    <Card.Body>
                        <Row>
                            <Col className="card1"></Col>
                            <Col>
                                <Card.Title>Nachos</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="danger">ORDER NOW</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>  
                    <Card.Body>
                        <Row>
                            <Col className="card1"></Col>
                            <Col>
                                <Card.Title>Huli Huli Chicken</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="danger">ORDER NOW</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>  
                    <Card.Body>
                        <Row>
                            <Col className="card1"></Col>
                            <Col>
                                <Card.Title>Fried Crab Balls</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="danger">ORDER NOW</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>  
                    <Card.Body>
                        <Row>
                            <Col className="card1"></Col>
                            <Col>
                                <Card.Title>Crab Rangoons</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="danger">ORDER NOW</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>  
                    <Card.Body>
                        <Row>
                            <Col className="card1"></Col>
                            <Col>
                                <Card.Title>Miso Soup</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="danger">ORDER NOW</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>  
                    <Card.Body>
                        <Row>
                            <Col className="card1"></Col>
                            <Col>
                                <Card.Title>Hawaiian Sun infused Cake</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant="danger">ORDER NOW</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Newnew;