import React from 'react';
import Carousel from 'better-react-carousel'
import Navbar from './Navbar';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
        <Navbar />
        <br />
        {/* carousel Top */}
        <div id='carousel'>
            <Carousel cols={3} rows={1} gap={10} autoplay={5000} loop={true}>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/banner-1x1-christmas-Final-common-winterwear-1671215724.jpg" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-copy-04-1670505869.jpg" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/winter-looks-common-1670589179.jpg" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1670505865.jpg" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/oof-sale-endstoday-1x1-common-1671109728.gif" alt=''/>
                </Carousel.Item>
            </Carousel>
        </div>
        <br />
        {/* Yellow Img */}
        <div>
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="below-car" style={{margin:'auto',width:'100%'}}/>
        </div>

        {/* Yellow img */}
        <div id='bellowYellow'>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1669138226.jpg" alt=''/>
                <h4>BestSellers</h4>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg" alt=''/>
                <h4>New Arrivals</h4>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" alt=''/>
                <h4>Hot Deals</h4>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" alt=''/>
                <h4>Official Collaborations</h4>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt=''/>
                <h4>Last Sizes Left</h4>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" alt=''/>
                <h4>Plus Size</h4>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg" alt=''/>
                <h4>Customization</h4>
            </div>
        </div>

        {/* Big Img */}
        <div id='bigimg'>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Men-1670938024.jpg" alt=''/>
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Women-1670938025.jpg" alt=''/>
            </div>
        </div>

        <div id='h'>
            <h1>POPULAR CATEGORIES</h1>
        </div>

        <div id='belowh'>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tees-1668765004.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-e-1670938024.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1670504700.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-d-1670923576.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670504700.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-7-1670503951.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleevetees-1668773243.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-c-1670923575.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-4-1670504697.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-6-1670504698.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-5-1670504699.jpg" alt=''/></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-boyfriend-tees-1668773241.jpg" alt=''/></div>
        </div>

        {/*Space for API data*/}

        <div id='h'>
            <h1>THE GANG'S FAVOURITE</h1>
        </div>

        <div id='belowh2'>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-clearance-zone-1670505866.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-trendy-jogs-common-1670506775.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-windcheaters-m-1670248088.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/full-sleeve-mid-sie-banner-1671179452.jpg" alt="" /></div>
        </div>

        <div id='h'>
            <h1>CATEGORIES TO BAG</h1>
        </div>

        <div id='belowh3'>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-jeans-1668772677.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg" alt="" /></div>
        </div>

        {/*Space for API */}

        {/* Carousel bottom */}
        <div>
            <Carousel cols={2} rows={1} gap={10} autoplay={5000} loop={true}>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-Accessories-HotNewArrivals-1668662727.gif" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/oversized-tshirt-banner-common-1671110500.jpg" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/aop-pyjama-women-1669904545.jpg" alt=''/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://images.bewakoof.com/uploads/grid/app/flat-knit-women-1668428219.jpg" alt=''/>
                </Carousel.Item>
            </Carousel>
        </div>

        <div id='h'>
            <h1>TOP ACCESSORIES</h1>
        </div>

        <div id='belowh3'>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-MobileCovers-1668754848.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Shoes-1668754848.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Bags-1668754847.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Books-1668754847.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Sliders-1668754849.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Caps-1668754848.jpg" alt="" /></div>
        </div>

        <div id='h'>
            <h1>TOP ACCESSORIES</h1>
        </div>

        <div id='belowh2'>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-monochrome-new-1670846089.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/sample-mid-size-1669722540.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/plus-size-common-1669022425.jpg" alt="" /></div>
            <div><img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-BF-women-1670846089.jpg" alt="" /></div>
        </div>

        <div>
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-Common-1669986431.jpg" alt="" style={{margin:'auto',width:'100%',marginTop:'1%'}}/>
        </div>
        <div>
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt="" style={{margin:'auto',width:'100%',marginTop:'1%'}}/>
        </div>

        <Footer />

    </div>
  )
}

export default Body