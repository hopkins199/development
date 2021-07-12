import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Player's Handbook (Dungeons & Dragons) Hardcover – Illustrated"
            price={31.30}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51k3peix3BL._SX378_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="452544256"
            title="Bestway SaluSpa 71 inch x 26 inch Helsinki AirJet Inflatable Hot Tub"
            price={599.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/912Rg99gvUL._AC_SS450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Amazon Halo Band – Measure how you move, sleep, and sound"
            price={99.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/616EXCFdv-L._SS400_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="25256574258"
            title="Xbox Series X - the fastest and mot powerful Xbox ever"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41OH7dLwaJL._SX522_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="9024525655"
            title="Alienware m17 R3 17.3 inch FHD Gaming Laptop (Luna Light) Intel Core i7-10750H 10th Gen, 16GB DDR4 RAM, 1TB SSD, Nvidia Geforce RTX 2070 8GB GDDR6, Windows 10 Home"
            price={2159.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71hhY4ikVwL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;