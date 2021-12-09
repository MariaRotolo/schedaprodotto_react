import React from "react";
import './style.css';

const ImgBlock = (img) => (
    <div className="product-img">
        <img src={img.src} alt={img.alt} />
    </div>
)

export default ImgBlock