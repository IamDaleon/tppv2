import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

class About extends Component {
    trig = () => {
    alert("Hey There");
    }

    render(){
        return(
            <div className ="container">
                <h1 className= "text-center">
                    About
                </h1>
                <div className="container text-center">
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>
                            <p>The Poké Point serves Hawaiian Poké bowls specifically the way you like it. What is Poké? The origin of poké comes from Hawaii. The word poké means 'in section' or 'chunks.' Poké is any seafood or meat cut into cubes and marinated. In this day and age, poké consists of mainly seafood.</p>


                            <p>The Poké Point provides the freshest cubed fish with delicious toppings and homemade sauces on a bed of rice or salad. As you move down the assembly line, you will choose your base, sides, proteins, toppings, sauce and garnishes. Each bowl is made with love, customized to your own taste and prepared right in front of your eyes.</p>


                            <p>If you're looking for a healthier alternative for food, you've come to the right place. If you're looking for food made quickly and efficiently, you've come to the right place. If you're looking to leave with a happy tummy and happy heart, you have definitely come to the right place!</p>


                            <p>Come by and check us out!</p>

                            <p>We are the hidden gem located inside the 99 Ranch Market. Mahalo!</p>
                        </Col>
                    </Row>
                </div>
            <Button onClick = {this.trig}>Hey</Button>
            </div> 
            );
        }
    }

export default About;