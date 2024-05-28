import React, { useState, useRef } from "react";

import arrow from "../../assets/arrow.svg"

import "./style.scss"

function Collapse ({title, content}) {
    // status initial du collapse
    const [setActive, setActiveState] = useState('');
    // Hauteur initiale du collapse a 0px
    const [setHeight, setHeightState] = useState('0px');
    // status initial de la class rotate
    const [setRotate, setRotateState] = useState('collapse-icon rotate');

    const contentCollapse = useRef(null);

    // on change le status active, la hauteur et la class rotate
    const toggleCollapse = () => {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(setActive === 'active' ? '0px' : `${contentCollapse.current.scrollHeight}px`);
        setRotateState(setActive === 'active' ? 'collapse-icon rotate' : 'collapse-icon');
    }

    const contentArray = [];
    if (!Array.isArray(content)) {
        contentArray.push(content)
    } else {
        content.forEach((content) => {
            contentArray.push(content)
        })
    }

    return (
        <div className="collapse-section">
            <button className={`collapse ${setActive}`} onClick={toggleCollapse}>
                <span className="collapse-title">{title}</span>
                <img src={arrow} className={`${setRotate}`} alt=""/>
            </button>
            <div ref={contentCollapse} style={{ maxHeight: `${setHeight}` }} className="collapse-content">
                <div className="collapse-text">
                    <div>
                        {contentArray.map((content, index) => (
                            <div key={`${content}-${index}`}>{content}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collapse