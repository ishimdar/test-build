import profileImg from "../../assets/images/pic.png";
// import resume from "../../assets/download/Ishimdar-Developer.pdf";
import resume from "../../assets/download/Ishimdar-Developer.pdf";

export default function AboutMe() {

  const allSkills = [
    {
      name: 'ReactJs',
      expert: '',      
    },
    {
      name: 'ReduxJs',
      expert: '',      
    },
    {
      name: 'JavaScript',
      expert: '',      
    },
    {
      name: 'Type Script',
      expert: '',      
    },
    {
      name: 'ES6',
      expert: '',      
    },
    {
      name: 'Jest',
      expert: '',      
    },
    {
      name: 'HTML5',
      expert: '',      
    },
    {
      name: 'CSS3',
      expert: '',      
    },
    {
      name: 'BootStrap',
      expert: '',      
    },
    {
      name: 'AEM',
      expert: '',      
    },
    {
      name: 'GatsBy Js',
      expert: '',      
    },
    {
      name: 'React Query',
      expert: '',      
    },
    {
      name: 'Git',
      expert: '',      
    },
    {
      name: 'Postman',
      expert: '',      
    },
    {
      name: 'VS Code',
      expert: '',      
    },
  ]

  return (
    <>
      <div className="row right-title">
        <div className="col-sm-1 col-2 icob">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="col-sm-11 col-10 titb" id="aboutMe">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="about row">
        <div className="col-md-4 bimg">
          <img src={profileImg} alt="" />
        </div>
        <div className="col-md-8 about-detail">
          <div className="detal-jumbo">
            <h3>Hello I'm Frontend / Ui Developer with ReactJs/AngularJs</h3>
            <p>
              Hello! I'm Ishimdar Ahamad, a passionate frontend developer
              specializing in React. With 9.5 years of experience in web
              development, I thrive on creating elegant user interfaces and
              crafting seamless user experiences.
            </p>
            <p>
              React.js: Proficient in building dynamic and interactive web
              applications using React.js. Experienced in state management with
              Redux and context API.
            </p>
            <p>
              JavaScript/ES6+: Strong command over modern JavaScript, including
              ES6+ features, to write clean, efficient, and maintainable code.
            </p>
            <p>
              HTML5 & CSS3: Expertise in semantic HTML and CSS for structuring
              and styling web pages, along with knowledge of CSS preprocessors
              like SASS/SCSS.
            </p>
          </div>
          <div className="skilsBox">
            <h6>Skills</h6>
            <ul className="skillsList">
              {/* <li>ReactJs</li>
              <li>Redux</li> */}
              {
                allSkills.map((skill, index) => {
                  return (
                    <li key={index}>{skill.name}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="links">
            <div className="row ">
              <div className=" col-md-12">
                <ul className="btn-link">
                  {/* <li className="hire">
                                <a href="" onClick={(e) => handleClickOpenMail()}>
                                  <i className="fas fa-paper-plane"></i> Hire Me
                                </a>
                              </li> */}
                  <li className="download">
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-cloud-download-alt"></i> Download
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="personali">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>{" "}
                Ishimdar Ahamad
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-map-pin"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>{" "}
                A-101, Sector-52, Noida, U.P. India
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>{" "}
                ahamadishimdar@gmail.com
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-calendar"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>{" "}
                26 Nov 1990
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-phone-call"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>{" "}
                +91 8860792664{" "}
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-file-text"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                India
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
