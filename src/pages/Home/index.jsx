import {useFetch} from "../../utils/fetch";
import Card from "../../components/Cards";
import Banner from "../../components/Banner";

import homeBanner from "../../assets/home-banner.jpg";

import "./style.scss";

function Home() {
    document.title = 'Accueil - Kasa';

    let annonces = useFetch(window.location.origin + "/annonces.json");

    return (
        <section className="home">
            <Banner cover={homeBanner} title="Chez vous, partout et ailleurs"/>
            {annonces.fetchedData && (
                <div className="card-list">
                    {annonces.fetchedData.map((annonce) => (
                        <Card key={annonce.id} link={`/annonce/${annonce.id}`} title={annonce.title} cover={annonce.cover} data={annonce}/>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Home;
