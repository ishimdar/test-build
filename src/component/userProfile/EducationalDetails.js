export default function EducationalDetails() {
  return (
    <>
      <div className="title-2 row no-margin" id="educationalDetails">
        <h2>Educational Details</h2>
      </div>

      <div className="resume-cover">
        <div className="row">
          <div className="col-md-12">
            <ul className="cbp_tmtimeline">
              <li>
                <time className="cbp_tmtime">
                  <span className="hidden">2012 - 2014</span>
                </time>

                <div className="cbp_tmicon">
                  <i className="fas fa-graduation-cap"></i>
                </div>

                <div className="cbp_tmlabel empty">
                  {" "}
                  <span>
                    <h4>B.Tech (Information Technology)</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </span>{" "}
                </div>
              </li>
              {/* <li>
                  <time className="cbp_tmtime">
                    <span>2008 - 2013</span>
                  </time>

                  <div className="cbp_tmicon bg-info">
                    <i className="fas fa-user-graduate"></i>
                  </div>

                  <div className="cbp_tmlabel">
                    <h4>UG Information Technology</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem voluptatibus, maiores suscipit sequi veritatis
                      saepe aspernatur.
                    </p>
                  </div>
                </li> */}
              <li>
                <time className="cbp_tmtime" dateTime="2017-11-03T13:22">
                  <span>2005 -2007</span>{" "}
                </time>
                <div className="cbp_tmicon bg-green">
                  {" "}
                  <i className="fas fa-school"></i>
                </div>
                <div className="cbp_tmlabel">
                  <h4>10+2</h4>
                  <p>PATEL MEMORIAL INTER COLLEGE, ATRAULIYA Azamgarh-22322</p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime" dateTime="2017-10-22T12:13">
                  <span>2003 - 2005</span>
                </time>
                <div className="cbp_tmicon bg-blush">
                  <i className="fas fa-chalkboard"></i>
                </div>
                <div className="cbp_tmlabel">
                  <h4>10Th</h4>
                  <p>PATEL MEMORIAL INTER COLLEGE, ATRAULIYA Azamgarh-22322</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
