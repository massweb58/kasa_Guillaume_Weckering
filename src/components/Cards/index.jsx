import {Link} from "react-router-dom";

import './style.scss';

function Card({link, title, cover, data}) {
    const jsonData = JSON.stringify(data);

    return (
        <div className="card">
            <Link to={{
                pathname: link,
                search: `?data=${encodeURIComponent(jsonData)}`
            }}>
                <div className="card-cover">
                    <img src={cover} alt={title}/>
                </div>
                <h2 className="card-title">{title}</h2>
            </Link>
        </div>
    )
}

export default Card