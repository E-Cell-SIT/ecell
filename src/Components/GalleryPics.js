import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gimg(props) {
    useEffect(() => {
        AOS.init();
    })
    return (< div data-aos="zoom-in-left" data-aos-offset="-20" >
        <picture >
            <img loading='lazy' width={600} height={400} style={{ maxWidth: "90vw", height: "auto", padding: "10px" }} src={props.src} alt="event-image-not-found"  />
        </picture >
    </div>
    )
}

function GalleryPics() {
    return (<div id="GalleryPics" className="d-flex gal" >
        <Gimg src="./assets/Gallery/linkedin-1.jpg" />
        <Gimg src="./assets/Gallery/linkedin-2.jpg" />
    </div>
    )
}

export default GalleryPics;