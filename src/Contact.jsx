import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import contact from './assets/contact_img.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_efsoo87',
        'template_jigarug',
        form.current,
       'gmPaZVmzJRIaUr15y'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('Error:', error.text);
        }
      );
  };

  return (
    <div id="contact" className="h-full w-full flex bg-custom-gradient flex-col md:flex-row">
      {/* Contact Form */}
      <div className="md:ml-28 mt-10 md:mt-44 md:w-1/2 px-5">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="text-white block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="w-full p-3 bg-slate-600 rounded outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white block mt-4 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full p-3 bg-slate-600 rounded outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-white block mt-4 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your Phone No."
              className="w-full p-3 bg-slate-600 rounded outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block mt-4 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 bg-slate-600 rounded outline-none h-28"
              required
            />
          </div>
          <button
            type="submit"
            className="ml-60 text-white text-xl border rounded mb-5 px-6 py-2 mt-6 bg-red-500 hover:bg-red-600 transition"
          >
            Send 
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="md:pl-32 pb-10 md:pb-20 md:w-1/2 flex items-center justify-center">
        <img className="max-w-full h-auto" src={contact} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
