import React, { useState } from "react";

import {useLocation} from "react-router-dom";

import Slideshow from "../../components/Slideshow";

import "./style.scss";

function Annonce() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const jsonData = JSON.parse(params.get('data'));

    document.title = jsonData.title + ' - Kasa';

    return (
        <section>
            <Slideshow images={jsonData.pictures}/>
        </section>
    )
}

export default Annonce;