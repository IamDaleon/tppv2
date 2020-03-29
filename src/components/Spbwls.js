import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Spbwls = (props) => {
    return(
        <div className =" container text-center">
            <h1>SPECIALTY BOWLS</h1>
            <div>
            <Row className="justify-content-md-center">
                <Col lg="2">
                <h5>ALOHA SPECIAL</h5>
                <p>Your choice of protein mixed with green onions, cucumbers, masago, sesame seeds and The Poke Point Sauce.</p>
                </Col>
                <Col lg="2">
                <h5>ONO SPECIAL</h5>
                <p>Your choice of protein mixed with red onions, green onions, corn, crispy onions, sesame seeds, Sweet Heat Sauce and the Poke Point Sauce.</p>
                </Col>
                <Col lg="2">
                <h5>OHANA SPECIAL</h5>
                <p>Your choice of protein mixed with green onions, cucumbers, masago, furikake, spicy mayo and the Poke Point Sauce.</p>
                </Col>
                <Col lg="2">
                <h5>MAHALO SPECIAL</h5>
                <p>Your choice of protein mixed in with green onions, cliantro, corn, furikake, spicy mayo, Sweet Heat Sauce and the Poke Point Sauce.</p>
                </Col>
            </Row>
            </div>
            </div>
    );
}

export default Spbwls;