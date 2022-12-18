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

                <h4>Top Wear</h4>

                 <p>Men's New Arrivals</p>
                 <p>Men's Half Sleeve T-Shirts</p> 
                 <p>Men's Hoodies & Sweatshirts</p> 
                 <p> Men's Long Sleeve T-shirts</p>
                 <p> Men's Printed T-shirts</p>
                 <p>Men's Plain T-shirts</p> 
                 <p>Men's Vests</p> 
                 <p>Men's Polo T-Shirts</p> 
                 <p>Men's Kurtas</p> 
                 <p>Men's Combo T-Shirts</p> 
                 <p>Men's Shirts</p> 
                 <p>Men's Nightwear</p> 
                 <p>Men's Plus Size Store</p> 
                
                <h4>Bottom Wear</h4>
                  <p>Men's Pajamas</p>
                  <p>Men's Boxer Shorts</p> 
                  <p>Men's Shorts</p>  
                  <p> Men's Track Pants</p> 
                  <p>Men's Pants</p>  
          
                <h4>Featured</h4>
                  <p>Men's Flip Flops</p>
                  <p></p> Men's Sliders
                  <p></p> Marvel T-Shirts
                  <p></p> Disney T-Shirts
                  <p></p> Avengers T-Shirts
                  <p></p> Star Wars T-Shirts
                  <p></p> Batman T-Shirts
                  <p></p> Superman T-Shirts
                  <p></p> Joker T-Shirts
                 
             </div>
            <div>
              <h2>WOMEN'S CLOTHING</h2>
                <h4>Women's Top Wear</h4>
                <p>Women's New Arrivals</p>
                <p>Women's T-Shirts</p> 
                <p>Women's Hoodies & Sweatshirts</p> 
                <p>Women's Dresses</p> 
                <p>Women's 3/4 Sleeve T-Shirts</p> 
                <p>Women's Kurtis</p> 
                <p>Women's Combo T-Shirts</p> 
                <p>Women's Nightwear</p> 
                <p>Women's Plus Size Store</p> 
              
              <h4>Women's Bottom Wear</h4>
                <p>Women's Pajamas</p>
                <p>Women's Boxer Shorts</p> 
                <p>Women's Jeans</p> 
                <p>Women's Joggers</p> 
                <p>Women's Shorts</p> 
              
              <h4>BAGS</h4>
                <p>Laptop Bags</p>
                <p>Small Backpacks</p>
              
              <h4>Featured</h4>
               <p>Women's Slides</p>
               <p>Women's Flip Flops</p> 
              
            </div>
            <div>
              <h2>MOBILE COVERS</h2>
               <h4>Brands</h4>
                <p>Apple</p>
                <p>Realme</p> 
                <p>Samsung</p> 
                <p>Xiaomi</p> 
                <p>Oneplus</p>
                <p>Vivo</p>
                <p>Oppo</p> 
              
            </div>
            <div>
              <h3>FANBOOK</h3>
              <h3>OFFERS</h3>
              <h3>SITEMAP</h3>
            </div>
          </div>
          <br />
          <br />
          <br />

          <hr id='line'/>
          
          <div id='footnote'>
            <h2> DrezZ Fashion THE NEW AGE ONLINE SHOPPING EXPERIENCE.</h2>

              <p>Founded in 2012, DrezZ Fashion is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. DrezZ Fashion was created on the principle of creating impact through innovation, honesty and thoughtfulness.</p>

              <p>With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability, and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee benefits. To create an accessible, affordable and thoughtful experience of online shopping in India.</p>

              <h2>ONLINE SHOPPING AT DrezZ Fashion IS HASSLE-FREE, CONVENIENT AND SUPER-EXCITING!</h2>

              <p>Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly hassle free. This in our own words is what we call DrezZ Fashion.com.</p>

              <p>DrezZ Fashion, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely certain that it will put a smile on their faces.</p>

              <h2>DrezZ Fashion.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!</h2>

              <p>Online fashion is definitely more accessible with DrezZ Fashion.com. Explore the latest collections in Marvel t-shirts including avengers t-shirts and captain America t-shirts in official merchandise. Apart from these, quirkiest of T-shirts that you wont find on any online shopping sites in India are showcased at DrezZ Fashion.com. If your wardrobe has been longing for a cool overhaul then DrezZ Fashion.com will certainly be your best bet amongst all online shopping sites. Also, take a tour of our DrezZ Fashion blog to stay abreast with the latest runway trends and be a trendsetter among your immediate circles. What we wear speaks volumes of us they say. But what if what you wore actually spoke what your mood was! Havent we all wondered where we could get those quirky t-shirts and sport them with confidence? Sure otherwise getting them made or even buying them from otherwise expensive online shopping sites for clothes may cost you substantially but with DrezZ Fashion.com, you will understand that you do not have to spend a fortune on online fashion to look great. Sliders, joggers, sweatshirts, bag and bag packs and so much more are just some of the other items you can grab hold of here.</p>

              <h2>AVAIL OF ONLINE SHOPPING BENEFITS AT DrezZ Fashion.COM AND YOULL SHOP NOWHERE ELSE!</h2>

              <p>Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment for the product from the comfort of your home, while we ensure free shipping all the time on almost everything with no strings attached. For any second thoughts after purchase, we have in place a return policy as well. One of the best you will find on any online shopping sites in India. For your online shopping experience to be safe and risk-free, we offer Cash On Delivery (COD) facility too. So you dont have to worry anymore about your hard earned money being stuck when you buy clothes online at DrezZ Fashion.com. Avail exciting online shopping offers like designs of the day and colour of the month when you shop with us. Make sure to use our easy 15-day returns policy, card or cash on delivery option and other customer-friendly features. A comprehensive sizing guide and detailed product descriptions coupled with high-resolution product shots will give you all the information to make the right buying decision. Give your wardrobe the much-needed upgrade with uber cool clothing head to DrezZ Fashion.com for a great online shopping india experience now! Could you have asked for more?</p>

              <h2>DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE STORE!</h2>

              <p>We dont just offer you exciting options in online fashion but also give you amazing accessories with really cool bags and bag packs to choose from. Our bags and backpacks are compact, hassle-free and easy to stuff things in. And all of this with the swag that you get to carry along with it. Cool designs are what form a major part of our online fashion and we also ensure our accessories section doesnt feel left out!</p>

              <p>As for our accessories collection, they are also manufactured with impeccable quality materials. Our mobile covers are made from hard and durable polycarbonate, with a matte finish that will make for a great protection for your phone with the rough use that we put them through nowadays.</p>

              <h2>DESIGN OF THE DAY- THE COOLEST FEATURE EVER!</h2>

              <p>Who said good and cool t-shirts have to expensive? We bring newer, cooler and more youth oriented designs everyday. Yes! Everyday you get a new design to explore and buy. Although all our t-shirts are at an extremely affordable price, we decided to slash them down even further. But there is a catch. It is only for those designs and these exclusive prices are only valid for for a duration of 24 hours! Designs refresh every day at 3pm and are valid only for 24 hours. So you need to hurry and grab one fast before it ends. Because we believe everyone needs to have a fair chance at all of our fresh designs of the day.</p>

              <h2>DrezZ Fashion.COM: THE UBER COOL ONLINE FASHION STORE FOR THE YOUTH</h2>

              <p>We, at DrezZ Fashion.com, have all that you need to glam up your cool quotient. From an extensive range of plus size clothing, casual shirts for men and accessories for everyone, we purvey diversity of choices in online shopping india platform has to offer under one umbrella. The range of apparels like men t-shirts, joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants and more provide an array of options for the online customer to create a ravishing ensemble from. We try to target all kinds of customers and cater to their needs and preferences. Communication is the key to our functioning. Your DrezZ Fashion Online fashion Shop has arrived! Do not miss the attractive online shopping offers everyday. Work your fashion with the wide range of apparels available only one click away! Make a statement with our best t-shirts online! Get more, pay less!</p>

              <h2>OUR PHILOSOPHY</h2>

              <p>We believe in creating the kind of fashion, that makes you stand out as they are in line with the latest local and global trends of the industry, but also at the same time offer value for money functionality, with quality materials and comfortable and flattering prints. We try to look into the psyche of our customers, and try to get inspired by the conversations and experiences around us while creating our graphics, to ensure that they are relatable. We believe in constant and consistent innovation to ensure that our fans get nothing short of the bets at affordable rates! While most people do not know, we do not outsource the manufacturing of our products, everything from the conception of the designs to the manufacture and the styling that you see on the photographs of the banners and product pages of our website all happen in house! We go from yarn to product and since we 're vertically integrated and bring fashion from us directly to your doorstep without any middlemen that also further ensures reliability because for us it is not just about the money but about building the trust and credibility in our fans about our brand. We also make sure to decrease the impact on environment and are building initiatives that will help us with the same, for now by optimizing our processes to use only as much as we need from nature, rain water harvesting and recycling the water from our RO water facility, because we believe that the spirit of DrezZ Fashion is about creating an impact by breaking conventions and having a different perspective!</p>

          </div>

        </div>
        
    </div>
  )
}

export default Footer