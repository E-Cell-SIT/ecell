import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Board(props) {
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className={props.cls} data-aos="zoom-in" data-aos-offset="-20">
            <div className="bmember">
                <div className="flip-box" data-aos="flip-left">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={`assets/Board/${props.pic}.png`} alt={props.name} />
                        </div>
                        <div className="flip-box-back">
                            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <p>{props.name}</p>
                        </div>
                    </div>
                </div>
                <h2 className="name">{props.name}</h2>
                <h3 className="desig">{props.designation}</h3>
            </div>
        </div>
    );
}

function DarkBgs(props) {
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className="bg">
            <h2 className="title" data-aos="fade-up" data-aos-offset="-20">{props.head}</h2>
            <p className="subhead" data-aos="fade-up" data-aos-offset="-20">{props.subhead}</p>
            <p className="content" data-aos="zoom-in" data-aos-offset="-20">{props.content}</p>
            {props.faculty &&
                <div className='facultyContainer'>
                    <div className='leftImage'>
                        {/* Use the Board component */}
                        <Board
                            name="Mr. Akshay Kansara"
                            designation="Faculty Coordinator"
                            pic="AK"
                            cls="three"
                            linkedin="https://www.linkedin.com/in/akshay-kansara-b004a31aa/"
                        />
                        <Board
                            name="Ms. Avani Dedhia"
                            designation="Coordinator"
                            pic="AD"
                            cls="three"
                            linkedin="https://www.linkedin.com/in/avani-dedhia-9572a6202/"
                        />
                        <Board
                            name="Mr. Kunalsinh Kathia"
                            designation="Coordinator"
                            pic="KK"
                            cls="three"
                            linkedin="https://www.linkedin.com/in/kunalsinh/"
                        />
                    </div>
                    <div className='rightText'>
                        <p className="content" data-aos="zoom-in" data-aos-offset="-20">{props.faculty}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default DarkBgs;