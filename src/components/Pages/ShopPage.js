import React from "react";
import "./ShopPage.css";
import SectionOne from "../shop/Section/SectionOne";
import SectionTwo from "../shop/Section/SectionTwo";
import data from "../Datas/Data";
function ShopPage(props) {
  return (
    <div className="shop-page">
      <SectionOne />
      <SectionTwo data={data} handleAddToCart={props.handleAddToCart} />
    </div>
  );
}

export default ShopPage;
