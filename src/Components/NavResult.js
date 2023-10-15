import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return ( <div className = { `result-topnav` } >
        <Link to = "/" > < img src = "./assets/Logos/ecell-white.png" alt = "E-cell SIT" height = "45" /> 
        </Link> 
        <div className = "headline"> Core Committee 2022 - 23 </div> 
        </div >
    );
}

export default Nav;