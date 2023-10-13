import React from "react";

function Social(props) {
    return (
        <div className={`${props.position}`}>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/ecell_sit"><span><i className="fab fa-twitter"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ecell_sit"><span><i className="fab fa-facebook-f"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/e-cell-sit"><span><i className="fab fa-linkedin"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://t.me/ecell_sit"><span><i className="fab fa-telegram"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ecell_sit"><span><i className="fab fa-instagram"></i></span></a>
        </div>
    );
}

export default Social;