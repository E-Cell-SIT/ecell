import React from "react";
import Social from "../Components/Social";

function Footer() {
    return (
        <div className="footer">
            <img src="./assets/Logos/ecell-white.png" alt="E-cell SIT" />
            <span className="iia">Educating Minds and Hearts</span>
            <a href="mailto:helloecellvit@gmail.com">info@saffrony.ac.in</a>
            <a href="tel:+91 7046461000">+91 7046461000</a>
            <Social position="bottom" />
        </div>
    );
}

export default Footer;
