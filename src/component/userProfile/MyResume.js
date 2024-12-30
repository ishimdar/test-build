export default function MyResume() {
  return (
    <>
      <div className="row right-title" id="myResume">
        <div className="col-sm-1 col-2 icob">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="col-sm-11 col-10 titb">
          <h2>My Resume</h2>
        </div>
      </div>
      <div className="resume-cover">
        <div className="row">
          <div className="col-md-12">
            <ul className="cbp_tmtimeline">
              <li>
                <time className="cbp_tmtime">
                  <span className="hidden">Aug 2022 - PRESENT</span>
                </time>

                <div className="cbp_tmicon">
                  <i className="fas fa-desktop"></i>
                </div>

                <div className="cbp_tmlabel empty">
                  {" "}
                  <span>
                    <h4>Module Lead in LTIMindtree</h4>
                    <p>
                      Here I have worked on Healthcare and Construction
                      projects. In both projects, I have used ReactJS, Redux,
                      Bootstrap, MUI, HTML5, CSS3, Responsiveness.
                    </p>
                  </span>{" "}
                </div>
              </li>
              <li>
                <time className="cbp_tmtime">
                  <span>Oct 2018 - Jul 2020</span>
                </time>

                <div className="cbp_tmicon bg-info">
                  <i className="fas fa-paint-brush"></i>
                </div>

                <div className="cbp_tmlabel">
                  <h4>UI Developer in FlowerAura</h4>
                  <p>
                    In this Project, I have worked on ReactJs, Redux, HTML5,
                    CSS3. Worked on page speed for SEO-friendly applications
                    with responsiveness. Optimized the application's smooth and
                    fast rendering.
                  </p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime" dateTime="2017-11-03T13:22">
                  <span>Apr 2016 - Oct 2018</span>{" "}
                </time>
                <div className="cbp_tmicon bg-green">
                  {" "}
                  <i className="fas fa-globe-africa"></i>
                </div>
                <div className="cbp_tmlabel">
                  <h4>Product Engineer</h4>
                  <p>
                    Responsive HTML conversion with Dreamweaver Using CSS
                    jQuery, java script, Jquery and AngularJs.
                  </p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime" dateTime="2017-10-22T12:13">
                  <span>Aug 2014 - Apr 2016</span>
                </time>
                <div className="cbp_tmicon bg-blush">
                  <i className="fab fa-gripfire"></i>
                </div>
                <div className="cbp_tmlabel">
                  <h4>UI Developer in Qlique Mediatech Pvt. Ltd.</h4>
                  <p>
                    Responsive HTML conversion with Dreamweaver Using CSS
                    jQuery, javascript, and Jquery.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
