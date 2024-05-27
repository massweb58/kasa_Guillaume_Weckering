import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Error404 from "./pages/404";
import APropos from "./pages/A-Propos";
import Annonce from "./pages/Annonces";

function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/annonce/:annonceId" element={<Annonce />}/>
                    <Route exact path="/a-propos" element={<APropos />}/>
                    <Route exact path="/*" element={<Error404 />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default Router;