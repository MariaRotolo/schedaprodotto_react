import React from "react";
import './style.css';

const SizesBlock = (props) => (
    <div className="sizes_block">
        <h3>{props.title}</h3>
        <div className="sizes_box">
            <div className="sizes_icones_active">S</div>
            <div className="sizes_icones">M</div>
            <div className="sizes_icones">L</div>
        </div>
    </div>
)

export default SizesBlock