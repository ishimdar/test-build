export default function HireMe() {
  return (
    <>
      <div className="row right-title" id="hireMe">
        <div className="col-sm-1 col-2 icob">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="col-sm-11 col-10 titb">
          <h2>Hire Me</h2>
        </div>
      </div>
      <div className="hire-me-row no-margin row">
        <div className="col-md-6">
          <div className="row singe-col">
            <div className="col-2 icons">
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
              </svg>
            </div>
            <div className="col-10 pl-0 drtg">
              <b>Address</b>
              <p>A-101, Sector-52, Noida, U.P. India</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row singe-col">
            <div className="col-2 icons">
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
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="col-10 pl-0 drtg">
              <b>Phone</b>
              <p>+91 8860792664</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row singe-col">
            <div className="col-2 icons">
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
              </svg>
            </div>
            <div className="col-10 pl-0 drtg">
              <b>Email </b>
              <p>ahamadishimdar@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row singe-col">
            <div className="col-2 icons">
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
                className="feather feather-clock"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="col-10 pl-0 drtg">
              <b>Working Hours</b>
              <p>Daily 09:00AM TO 06:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
