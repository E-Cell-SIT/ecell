import React, { useEffect } from "react";
import DarkBg from "../Components/DarkBg";
import AOS from "aos";
import "aos/dist/aos.css";

function Board(props) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={props.cls} data-aos="zoom-in" data-aos-offset="-20">
      <div className="bmember">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src={`assets/Board/${props.pic}.png`} alt={props.name} />
            </div>
            <div className="flip-box-back">
              <a href={props.linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <h2 className="name">{props.name}</h2>
        <h3 className="desig">{props.designation}</h3>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div id="team">
      <DarkBg head="Team" />
      <div className="team">
        <Board
          name="Dhruv Mavani"
          designation="President"
          pic="Dhruv"
          cls="one"
          linkedin="https://www.linkedin.com/in/dhruv-mavani/"
        />

        <Board
          name="Mihir Joshi"
          designation="Vice President"
          pic="Mihir"
          cls="two"
          linkedin="https://www.linkedin.com/in/mihir-joshi-full-stack/"
        />
        <Board
          name="Sidhhi Marvaniya"
          designation="Vice President"
          pic="Sidhhi"
          cls="two"
          linkedin="https://www.linkedin.com/in/siddhi-marvaniya/"
        />
        <Board
          name="Chandrashekhar"
          designation="Techincal Head"
          pic="Chandrashekhar"
          cls="two"
          linkedin="https://www.linkedin.com/in/chandrashekhar-mehta-303a91230/"
        />
        <Board
          name="Darshan Dhaduk"
          designation="Branding/Designing Head"
          pic="Darshan"
          cls="two"
          linkedin="https://www.linkedin.com/in/creative-darshan-406015275/"
        />
        <Board
          name="Ruchit Dasadiya"
          designation="Social Media Head"
          pic="Ruchit"
          cls="two"
          linkedin="https://www.linkedin.com/in/ruchit-dasadiya-82a992241/"
        />
        <Board
          name="Niraj Lalwani"
          designation="Event Head"
          pic="Niraj"
          cls="two"
          linkedin="https://www.linkedin.com/in/niraj-lalwani/"
        />
        <Board
          name="Kewal Shah"
          designation="PR & Hospitality Head"
          pic="Kewal"
          cls="three"
          linkedin="https://www.linkedin.com/in/kewal-shah-work/"
        />
        <Board
          name="Arnav Modanwal"
          designation="Operational Head"
          pic="Arnav"
          cls="three"
          linkedin="https://www.linkedin.com/in/arnav-modanwal/"
        />
        <Board
          name="Siddharth Rana"
          designation="Operational Head"
          pic="Siddh"
          cls="three"
          linkedin="https://www.linkedin.com/in/siddharth-rana-107527237/"
        />
<Board
          name="Prerana"
          designation="Operational Head"
          pic="Prerana"
          cls="three"
          linkedin="https://www.linkedin.com/in/prerana-parmar/"
        />
        <Board
          name="Manali Patel"
          designation="Technical Member"
          pic="Manali"
          cls="three"
          linkedin="https://www.linkedin.com/in/manali-patel-39b305250/"
        />
        <Board
          name="Mayank Rajput"
          designation="Technical Member"
          pic="Mayank"
          cls="three"
          linkedin="https://www.linkedin.com/in/mayankrajput2110"
        />
<Board
          name="Umesh Choudhary"
          designation="Technical Member"
          pic="Umesh"
          cls="three"
          linkedin="https://www.linkedin.com/in/umesh-choudhary-67980a242/"
        />
        <Board
          name="Smit Vidja"
          designation="Designing"
          pic="Smit"
          cls="three"
          linkedin="https://www.linkedin.com/in/smit-vidja-84-/"
        />
        <Board
          name="Hani Patel"
          designation="Designing"
          pic="Hani"
          cls="three"
          linkedin="https://www.linkedin.com/in/hani-patel-750240212/"
        />
        <Board
          name="Karan Modi"
          designation="Designing"
          pic="Karan"
          cls="three"
          linkedin="https://www.linkedin.com/in/karan-modi-087a64236/"
        />
        <Board
          name="Vivek Upadhyay"
          designation="Content & Designing"
          pic="Vivek"
          cls="three"
          linkedin="https://www.linkedin.com/in/vivek-upadhyay-a87942239/"
        />
        <Board
          name="Mansi Chauhan"
          designation="Content"
          pic="Mansi"
          cls="three"
          linkedin="https://www.linkedin.com/in/mansi-chauhan-05a897238/"
        />
        <Board
          name="Vivek Sarkheliya"
          designation=" Designing"
          pic="VivekS"
          cls="three"
          linkedin="https://www.linkedin.com/in/viveksarkheliya/"
        />
      
        <Board
          name="Sneha Patel"
          designation="PR & Hospitality"
          pic="Sneha"
          cls="three"
          linkedin="https://www.linkedin.com/in/sneha-patel-69ba71241/"
        />
        <Board
          name="Harshit Mishra"
          designation="PR & Hospitality"
          pic="Harshit"
          cls="three"
          linkedin="https://www.linkedin.com/in/harshit-mishra-50a664222/"
        />
        <Board
          name="Pritesh Singh"
          designation="Event"
          pic="Pritesh"
          cls="three"
          linkedin="https://www.linkedin.com/in/pritesh7599/"
        />
        <Board
          name="Kashish Patel"
          designation="Event"
          pic="Kashish"
          cls="three"
          linkedin="https://www.linkedin.com/in/patel-kashish-260241239/"
        />
        <Board
          name="Priya Rathod"
          designation="Event"
          pic="Priya"
          cls="three"
          linkedin="https://www.linkedin.com/in/priya-kanwar-1972a7270/"
        />
        <Board
          name="Mit Prajapati"
          designation="Event"
          pic="Mit"
          cls="three"
          linkedin="https://www.linkedin.com/in/mitkumar-prajapati-830930253/"
        />
        <Board
          name="Rohan Akhja"
          designation="Event"
          pic="Rohan"
          cls="three"
          linkedin="https://www.linkedin.com/in/rohanakhja/"
        />
        <Board
          name="Yash Babariya"
          designation="Social Media"
          pic="Yash"
          cls="three"
          linkedin="https://www.linkedin.com/in/yashbabariya/"
        />
        
        
      </div>
    </div>
  );
}

export default Team;
