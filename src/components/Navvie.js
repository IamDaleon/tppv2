import React from 'react';


function Navvie() {
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto" href="#">THE POKÉ POINT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Specials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Location</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Order Now
</button>

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
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
}

export default Navvie;