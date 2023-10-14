import React from "react";

function Social(props) {
    return (
        <div className={`${props.position}`}>
            <a target="_blank" rel="noreferrer" href="https://x.com/Saffrony_ecell?s=20"><span><i className="fab fa-twitter"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/friends/?profile_id=61551074501094&notif_id=1695062053006656&notif_t=friend_confirmed&ref=notif"><span><i className="fab fa-facebook-f"></i></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/e-cell-sit-936b11291/"><span><i className="fab fa-linkedin"></i></span></a>
            {/* <a target="_blank" rel="noreferrer" href="https://medium.com/e-cell-vit"><span><i className="fab fa-medium"></i></span></a> */}
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ecell_sit/"><span><i className="fab fa-instagram"></i></span></a>
        </div>
    );
}

export default Social;