import star from "../../assets/star.svg";
import starEmpty from "../../assets/star-inactive.svg";

import "./style.scss";

function Rating({rating}) {
    const stars = 5;
    const starNumber = parseInt(rating);
    const emptyStar = stars - starNumber;

    return (
        <div className="rating-wrapper">
            {[...Array(starNumber)].map((value, index) => (
                <img src={star} alt="Etoile pleine" key={"full-star-"+index} className="star" />
            ))}
            {[...Array(emptyStar)].map((value, index) => (
                <img src={starEmpty} alt="Etoile vide" key={"empty-star-"+index} className="star-empty" />
            ))}
        </div>
    )
}

export default Rating