import React from "react";
import './style.css';
import ImgBlock from "../ImgBlock/";
import ProductInfo from "../ProductInfo";


const Product = ({ imgSrc, productTitle, productPrice, productDescription, ColorTitle, SizeTitle, productButton}) => (
    <div className="card">
        <ImgBlock src={imgSrc} alt={productTitle}/>
        <ProductInfo 
            productTitle ={productTitle} 
            productPrice ={productPrice} 
            productDescription ={productDescription} 
            ColorTitle ={ColorTitle}
            SizeTitle ={SizeTitle}
            Button ={productButton}
        />
    </div>
)

export default Product