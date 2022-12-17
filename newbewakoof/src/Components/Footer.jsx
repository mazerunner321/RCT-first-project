import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter,FaPinterest,FaSnapchat,FaApple,FaDiscord,FaGithub} from "react-icons/fa";
import {GiReturnArrow,GiCash} from 'react-icons/gi';

const Footer = () => {
  return (
    <div>
        <div id='footer'>
          <div><h1>DrezZ Fashion <sup>&#169;</sup></h1></div>
          <div id='contain'>
            <div>
              <h3>CUSTOMER SERVICE</h3>
              <p>Contact Us</p>
              <p>Track Order</p>
              <p>Return Order</p>
              <p>Cancel Order</p>
            </div>
            <div>
              <h3>COMPANY</h3>
              <p>About Us</p>
              <p>We're Hiring</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Blog</p>
            </div>
            <div>
              <h3>CONNECT WITH US</h3>
              <p style={{display:"flex", justifyContent:"space-between",alignItems:'center',gap:'10px'}}> <FaFacebook /> 7.8M People Like This</p>
              <p style={{display:"flex",alignItems:'center',gap:'10px'}}> <FaInstagram /> 5M Followers</p>
              <div id='ic'>
                <p><FaTwitter/></p>
                <p><FaPinterest/></p>
                <p><FaSnapchat/></p>
                <p><FaApple/></p>
                <p><FaDiscord/></p>
                <p><FaGithub/></p>
              </div>
            </div>
            <div>
              <h3>KEEP UP TO DATE</h3>
              <input type="email" placeholder='Enter email ID' style={{backgroundColor:'black',padding:'5px'}}/>
              <button id='sub'>SUBSCRIBE</button>
            </div>
          </div>

          <div id='contain' style={{width:'65%',marginTop:'2%'}}>
            <div>
              <p style={{display:"flex", justifyContent:"space-between",alignItems:'center',gap:'10px'}}><GiReturnArrow />15 Days return policy*</p>
              <p style={{display:"flex",alignItems:'center',gap:'10px'}}><GiCash/>Case on Delivery*</p>
            </div>
            <div>
              <h3>DOWNLOAD THE APP</h3>
              <img src="https://e7.pngegg.com/pngimages/368/574/png-clipart-apple-store-logo-iphone-app-store-google-play-android-now-button-electronics-text.png" alt="" width={'100px'}/>
            </div>
            <div>
              <h3>100% SECURE PAYMENT</h3>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxQH1nztS-sC0D_PXcvLIRgw_uIs_CX05Cg&usqp=CAU" alt="" width={'150px'}/>
            </div>
          </div>
          <hr id='line' style={{marginTop:'2%'}}/>

          <div id='belowline'>
            <div>
              <h2>MEN'S CLOTHING</h2>
              <p>Top Wear</p>
               <p>Men's New Arrivals
                  Men's Half Sleeve T-Shirts
                  Men's Hoodies & Sweatshirts
                  Men's Long Sleeve T-shirts
                  Men's Printed T-shirts
                  Men's Plain T-shirts
                  Men's Vests
                  Men's Polo T-Shirts
                  Men's Kurtas
                  Men's Combo T-Shirts
                  Men's Shirts
                  Men's Nightwear
                  Men's Plus Size Store
                </p>
                <p>Bottom Wear</p>
                <p>
                  Men's Pajamas
                  Men's Boxer Shorts
                  Men's Shorts
                  Men's Track Pants
                  Men's Pants
                </p>
                <p>Featured</p>
                 <p>
                  Men's Flip Flops
                  Men's Sliders
                  Marvel T-Shirts
                  Disney T-Shirts
                  Avengers T-Shirts
                  Star Wars T-Shirts
                  Batman T-Shirts
                  Superman T-Shirts
                  Joker T-Shirts
                 </p>
             </div>
            <div>
              <h2>WOMEN'S CLOTHING</h2>
              <p>Women's Top Wear</p>
              <p>
                Women's New Arrivals
                Women's T-Shirts
                Women's Hoodies & Sweatshirts
                Women's Dresses
                Women's 3/4 Sleeve T-Shirts
                Women's Kurtis
                Women's Combo T-Shirts
                Women's Nightwear
                Women's Plus Size Store
              </p>
              <p>Women's Bottom Wear</p>
              <p>
                Women's Pajamas
                Women's Boxer Shorts
                Women's Jeans
                Women's Joggers
                Women's Shorts
              </p>
              <p>BAGS</p>
              <p>
                Laptop Bags
                Small Backpacks
              </p>
              <p>Featured</p>
              <p>
                Women's Slides
                Women's Flip Flops
              </p>
            </div>
            <div>
              <h2>MOBILE COVERS</h2>
              <p>Brands</p>
              <p>
                Apple
                Realme
                Samsung
                Xiaomi
                Oneplus
                Vivo
                Oppo
              </p>
            </div>
            <div>
              <h2>FANBOOK</h2>
              <h2>OFFERS</h2>
              <h2>SITEMAP</h2>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Footer