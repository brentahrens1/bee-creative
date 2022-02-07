import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
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
        <main className="contact">
            <Head>
                <title>BeeCat Creative | Contact Us</title>
                <meta name="description" content="Beecat Creative Contact Us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='contact__heading'>
                <div className='contact-heading-image'>
                    <Image width={300} height={280} layout="responsive" priority={true} src='/images/clock.png' alt="BeeCat Creative | Contact Us" />
                </div>
            </section>
            <section className='contact__form'>
                <h1>Shoot us a Message</h1>
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
                        <label>Let is all out. We&apos;re here for you.</label>
                        <textarea 
                        type="text"
                        rows="8" 
                        cols="50"
                        name="message"
                        >
                        </textarea>
                        <input type="submit" value="godspeed" />
                </form>
                :
                <div className="success">
                    <h1>Did you know the moon has moonquakes? Weird.</h1>
                    <h1>Your message is currently traveling through time and space. Destination: our inbox. So be on the lookout for our BeeCat signal… ahem, email</h1>
                </div>
            }
            </>
            </section>
        </main>
    )
}