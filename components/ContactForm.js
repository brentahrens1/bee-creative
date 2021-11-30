import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef();
  const [ isSuccess, setIsSuccess ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_gykjvxj', 'template_71nweld', form.current, 'user_h2jSyo7kIF8oKQP7E4v9t')
      .then((result) => {
          console.log(result.text)
          setIsSuccess(true)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <>
      {
        !isSuccess ?
          <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Name</label>
                <div className="name-fields">
                    <input 
                      type="text" 
                      name="first-name" 
                      placeholder="First Name"
                    />
                    <input 
                      type="text" 
                      name="last-name" 
                      placeholder="Last Name" 
                    />
                </div>
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                />
                <label>Let it all out. We're here for you.</label>
                <textarea 
                  type="text"
                  rows="8" 
                  cols="50"
                  name="message"
                >
                </textarea>
                <input type="submit" value="Godspeed" />
          </form>
        :
          <div className="success">
            <h1>Thanks for reaching out. We'll get back to you soon.</h1>
          </div>
      }
    </>
  )
}