import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import ModalPopup from "./ModalPopup";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [state, handleSubmit] = useForm('mvgoeoyj');  
  const [showModal, setShowModal] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  const onSubmit = async (e) => {    
    e.preventDefault();

    try {
      await handleSubmit(e);
      setShowModal(true);
      // if (state.succeeded) {      
      //   resetForm(); // Reset the form after successful submission
      // }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleClickClose = () => {
    setShowModal(false);
    resetForm();
  }
  
  return (
    <>
      <div id="contactUs" className="row right-title pt-4">
        <div className="col-sm-1 col-2 icob">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="col-sm-11 col-10 titb">
          <h2>Contact Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="contact-us">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4916170828296!2d77.36366297451758!3d28.585024975690665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59b4f93837f%3A0x81711c86cc895b5f!2sA101%2C%20Block%20A%2C%20Sector%2052%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1713623321069!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="myFrame"
            ></iframe>
          </div>
        </div>
        <div className="col-sm-6">
          <form
            className="form contact-form"
            onSubmit={onSubmit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                // onChange={(e) => setSenderName(e.target.value)}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <ValidationError className="error" prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
               <ValidationError className="error" prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <ValidationError className="error" prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="mb-3 text-sm-end">              
              <button type="submit" disabled={state.submitting} className="btn block btn-primary">
                Submit
              </button>
            </div>            
          </form>
        </div>        
        {
          showModal && <ModalPopup handleClickClose={handleClickClose} senderName={formData?.name} />
        }
      </div>
    </>
  );
}
