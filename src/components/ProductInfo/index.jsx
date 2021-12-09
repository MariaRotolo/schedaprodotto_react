import React from "react";
import './style.css';
import TextBlock from "../TextBlock";
import ColorsBlock from "../ColorsBlock";
import SizesBlock from "../SizesBlock";
import ButtonsBlock from "../ButtonsBlock";

const ProductInfo = ({productTitle, productPrice, productDescription, ColorTitle, SizeTitle, productButton}) => (
    <div className="product_info">
        <TextBlock title ={productTitle} price={productPrice} description={productDescription} />
        <ColorsBlock title ={ColorTitle} />
        <SizesBlock title ={SizeTitle} />
        <ButtonsBlock button = {productButton} />
    </div>
)

export default ProductInfo