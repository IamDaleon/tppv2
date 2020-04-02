import React from 'react';

function MainScroll() {
        return(
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Freappropriate.co%2Fwp-content%2Fuploads%2F2018%2F07%2Fpoke-1200x801.jpg&f=1&nofb=1" class="d-block w-100 h-100" alt="..." />
                    <div class="card-img-overlay container text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSCxtdVwf6l8%2Fmaxresdefault.jpg&f=1&nofb=1" class="d-block w-100 h-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwilcityapp.com%2Fwp-content%2Fuploads%2F2018%2F05%2FBarcelona_3-1.jpg&f=1&nofb=1" class="d-block w-100 h-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
}

export default MainScroll;