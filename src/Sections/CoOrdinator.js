import React from "react";
import DarkBg from "../Components/DarkBgs";

function CoOrdinator() {

  const coordinatorText = "In the dynamic landscape of Saffronys Entrepreneurship Cell, Prof. Akshay Kansara, Prof. Avani Dedhia, and Mr. Kunalsinh Kathia play pivotal roles in shaping our students entrepreneurial spirit. Their collaborative guidance fosters innovation, technical prowess, and a values-driven approach. Together, they create an ecosystem where ideas flourish, students thrive, and a culture of innovation thrives at Saffrony Institute of Technology."

  return (
    <div id="Faculty">
      <DarkBg head="Our Faculty Co-ordinator" faculty={coordinatorText}/>
    </div>
  );
}

export default CoOrdinator;
