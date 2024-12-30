export default function ModalPopup({handleClickClose, senderName}) {
  return (
    <>
      <div
        className="modal fade bd-example-modal-sm show"
        style={{ display: "block", "paddingRight": "17px" }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">            
            <div className="modal-body">
                <p><strong>Dear {senderName}</strong></p>
                <p>
                    Thank you so much for your interest in my profile and for bringing this job to my attention. 
                    <br />
                    I am interested in learning more about the opportunity and seeing whether it’s a good fit. 
                </p>
                <p>
                    Please feel free to send me more information at <a href="mailTo:ahamadishimdar@gmail.com">ahamadishimdar@gmail.com</a>.
                </p>
                <p>
                    Looking forward to learning about the role. 
                </p>
                <p>
                Thanks & regards,
                </p>
                <p>
                    Ishimdar Ahamad
                    <br />
                    +91-8860792664
                </p>
            </div>
            <div className="modal-footer">              
              <button type="button" className="btn btn-primary" onClick={() => handleClickClose()}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
