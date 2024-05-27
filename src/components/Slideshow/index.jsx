import React, { useState } from "react";

import sliderArrow from "../../assets/slider-arrow.svg";

import "./style.scss";

function Slideshow ({images}) {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(images) || length <= 0) {
        return null;
    }

    return (
        <div className="slideshow">
            {length > 1 && (
                <img
                    src={sliderArrow}
                    className="left-arrow"
                    onClick={previousSlide}
                    alt="Previous arrow"
                />
            )}
            {length > 1 && (
                <img
                    src={sliderArrow}
                    className="right-arrow"
                    onClick={nextSlide}
                    alt="Next arrow"
                />
            )}

            {images.map((slider, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={`slider-${index}`}>
                        {index === current && (
                            <img src={slider} alt={"slide " + (parseInt(index) + 1)} className="image"/>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slideshow
