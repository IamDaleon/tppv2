import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

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
                <div className="container">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        Order Now
                    </button>
                </div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    <div class="mb-auto">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="card-deck">
  <div class="card">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body text-center">
      <h5 class="card-title">Delievery</h5>
      <button className= "btn btn-primary">For Delievery</button>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body text-center">
      <h5 class="card-title">Pickup</h5>
      <button className= "btn btn-primary">For Pickup</button>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
            </div> 
            );
        }
    }

export default About;