import React from "react";
import './style.css';

const TextBlock =  (props) => (
    <div className="text_block">
        <div className="text_block_header">
            <div className="card-content-text_header_title"><h2>{props.title}</h2></div>
            <div className="card-content-text_header_price"><h3>{props.price}$</h3></div>
        </div>
        <div className="text_blco_description">
            <p>{props.description}</p>
        </div>
    </div>
);

export default TextBlock