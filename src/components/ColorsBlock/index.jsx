import React from "react";
import './style.css';


const ColorsBlock = (props) => (
    <div className="colors_block">
        <h3>{props.title}</h3>
        <div className="color_icones">
            <div className="color_icones_black"></div>
            <div className="color_icones_blue"></div>
            <div className="color_icones_yellow"></div>
            <div className="color_icones_gray"></div>
        </div>
    </div>
)

export default ColorsBlock