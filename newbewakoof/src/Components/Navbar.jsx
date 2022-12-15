import React from 'react';
import {FaSearch, FaHeart} from 'react-icons/fa';
import {BsBag} from "react-icons/bs";

const Navbar = () => {
    const carOne=[
        {img:'https://images.bewakoof.com/uploads/grid/app/oof-sale-endstom-1x1-common-1671025899.gif'},
        {img:'https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg'},
        {img:'https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-copy-04-1670505869.jpg'},
        {img:'https://images.bewakoof.com/uploads/grid/app/winter-looks-common-1670589179.jpg'},
        {img:'https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1670505865.jpg'}
    ]

  return (
    <div>
        {/* navbar top */}
        <div id='navtop'>
            <div>
            <p>Offers</p>
            <p>Fanbook</p>
            <p>Download App</p>
            <p>TriBe Membership</p>
            </div>
            <div>
                <p>Contact Us</p>
                <p>Track Order</p>
            </div>
        </div>

        {/* navbar mid */}
        <div id='navmid'>

            <div id='logo'>
               <img src="https://i.ibb.co/0cbv5QB/DREZZ.png" alt="DREZZ" border="0" style={{borderRadius:'50%'}}/>
            </div>
            <div>
                <h1>DrezZ Fashion</h1>
            </div>
            <div>
                <h2>MEN</h2>
                <h2>WOMEN</h2>
                <h2>MOBILE COVERS</h2>
            </div>
            <div>
                <FaSearch opacity={'0.7'}/>
                <input type="text" id="" placeholder='Search by product, category or collection'/>
            </div>
            <div>
                <h2>Login</h2>
                <FaHeart />
                <BsBag />
            </div>
            <div>
                <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="Bharath" style={{width:'40px'}}/>
            </div>

        </div>

        {/* nav bottom */}
        <div id='navbot'>
            <h3>LIVE NOW!</h3>
            <h3>MEN</h3>
            <h3>WOMEN</h3>
            <h3>ACCESSORIES</h3>
            <h3>WINTERWEAR</h3>
        </div>
    </div>
  )
}

export default Navbar
