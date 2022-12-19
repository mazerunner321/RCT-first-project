import React from 'react';
import {FaSearch, FaHeart} from 'react-icons/fa';
import {BsBag} from "react-icons/bs";
import {Link} from "react-router-dom";



const Navbar = () => {
    

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
               <Link to={"/"}>
                 <img src="https://i.ibb.co/0cbv5QB/DREZZ.png" alt="DREZZ" border="0" style={{borderRadius:'50%'}}/>
               </Link>
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
                <Link to="/signin"><h2>Sign In</h2></Link>
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
