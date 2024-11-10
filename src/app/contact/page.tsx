import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className='contact-section'>
      <h1 className='contact-title'>
        Contact Us
      </h1>

      <div className='contact-leftsec'>
  
        <div className='contact-imgdiv'>
          <Image
            src="/contact1.jpg"
            alt="Cone"
            width={800}
            height={400}
            className='contact-img'
          />
        </div>

        <div className='contact-formdiv'>
          <form className='contact-form'>
            <div className='form-group'>
              <label className='form-label'>Name:</label>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
                required
                className='form-input'
              />

              <label className='form-label'>Phone:</label>
              <input
                type='number'
                placeholder='Your Phone'
                name='number'
                required
                className='form-input'
              />

              <label className='form-label'>Email:</label>
              <input
                type='email'
                placeholder='Your Email'
                name='email'
                required
                className='form-input'
              />

              <label className='form-label'>Message:</label>
              <textarea
                placeholder='Your Message'
                name='message'
                rows={4}
                className='form-input'
              ></textarea>

              <button className='form-button'>
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
