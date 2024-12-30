// import profileImg from "../../assets/images/pf2.jpg";


import "../../assets/scss/style.scss";
import "./index.css";
// import resume from "../../assets/download/Ishimdar-Developer.doc"

import MySkills from "./MySkills";
import MyHobbies from "./MyHobbies";
import HireMe from "./HireMe";
import MyResume from "./MyResume";
import EducationalDetails from "./EducationalDetails";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";


export default function UserProfile() {
  // const handleClickDownload = (e) => {
  //   e.preventDefault();
  //   alert("as");
  // };

  // const handleClickOpenMail = (e) => {
  //   window.location = "mailto:ahamadishimdar@gmail.com";
  // }

  return (
    <div>
      <div className="col-lg-12">
        <div className="profile-detail">
          <AboutMe />
          <MySkills />
          {/* <MyServices /> */}
          <MyHobbies />
          <br />
          <br />
          <HireMe />
          <MyResume />
          <EducationalDetails />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
