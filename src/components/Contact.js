import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contactCard'>
        <p><i className="fa-solid fa-envelope"></i> E-mail : work.alihammad@gmail.com</p>
        <p><i className="fa-solid fa-phone"></i> Phone : +91-7668020889</p>
        <p><i className="fa-solid fa-location-dot"></i> Location : Asalatpura, Moradabad, Uttar Pradesh-244001, India</p>
        <div className='social-platforms'>
          <a className='socialLink' href='https://www.linkedin.com/in/hammad-ali-30b455376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' target='_blank' rel="noopener noreferrer"><p><i className="fa-brands fa-linkedin"></i></p></a>
          <a className='socialLink' href='https://www.instagram.com/hammad__ll?igsh=c2dnMm00cWs3Ymtn ' target='_blank' rel="noopener noreferrer"><p><i className="fa-brands fa-instagram"></i></p></a>
          <a className='socialLink' href='https://www.linkedin.com/in/hammad-ali-30b455376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' target='_blank' rel="noopener noreferrer"><p><i className="fa-brands fa-github"></i></p></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;