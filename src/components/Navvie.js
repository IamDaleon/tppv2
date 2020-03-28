import React from 'react';


function Navvie() {
        return(
            <div>
                    <nav className= "light-blue lighten-4">
                        <div className="nav-wrapper container ">
                            <a href="#!" className="brand-logo">Logo</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Order</a></li>
                                <li><a href="#">Specials</a></li>
                                <li><a href="#">Location</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                    <button className= "  teal darken-2">WHAAAA</button>
            </div>
        )
}

export default Navvie;