import React from "react";
import DarkBg from "../Components/DarkBg";

function Faculty() {

  const facultyText = "We are honoured to introduce Mr. Dhiren Parekh, the faculty coordinator of the Entrepreneurship Cell with specialization in Accounting and Finance from Institute of Chartered Accountants of India . His multifaceted expertise and unwavering dedication make him a true pillar of strength within our community. Mr. Dhiren Parekh's rich academic background, combined with his visionary leadership, has been instrumental in shaping E-Cell's trajectory. His unwavering commitment to nurturing young minds and providing them with the tools they need to succeed sets her apart as a true mentor and guide. Under his mentorship, the Entrepreneurship Cell has flourished into a vibrant ecosystem where innovation thrives, ideas take shape, and dreams come to fruition."

  return (
    <div id="Faculty">
      <DarkBg head="Our Faculty Co-ordinator" faculty={facultyText}/>
    </div>
  );
}

export default Faculty;
