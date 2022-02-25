import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
// import ReCAPTCHA from "react-google-recaptcha"

export default function ContactUs() {
    const form = useRef();
    const [ isSuccess, setIsSuccess ] = useState(false)
    // const [ isCaptcha, setIsCaptcha ] = useState(false)

    // const toggleCaptcha = (e) => {
    //     e.preventDefault()
    //     setIsCaptcha(true)
    // }

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE}`, `${process.env.NEXT_PUBLIC_TEMPLATE}`, form.current, `${process.env.NEXT_PUBLIC_USER}`)
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
                <meta name="description" content="Let it all out. We&apos;re here for you." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='contact__heading'>
                <div className='contact-heading-image'>
                    <Image width={420} height={280} layout="responsive" priority={true} src='/images/contact/phone.png' alt="BeeCat Creative | Contact Us" />
                </div>
                <h1>Contact Us</h1>
            </section>
            <section className='contact__form'>
            <>
            {
                !isSuccess ?
                <>
                <div className='contact--socials'>
                    <p>Email: <a  href="mailto:hello@beecatcreative.com" target="_blank" rel="noreferrer">hello@beecatcreative.com</a></p>
                    <p>IG: <a  href="https://instagram.com/beecatcreative" target="_blank" rel="noreferrer">@beecatcreative</a></p>
                    <p>FB: <a  href="https://facebook.com/beecatcreative" target="_blank" rel="noreferrer">@beecatcreative</a></p>
                    <p>BeeCat Creative<br/>HQ located in Frederick, MD</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h1>Shoot us a Message</h1>
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
                    <label>Let it all out. We&apos;re here for you.</label>
                    <textarea 
                    type="text"
                    rows="8" 
                    cols="50"
                    name="message"
                    >
                    </textarea>
                    <input type="submit" value="godspeed" />
                </form>
                </>
                :
                <div className="success">
                    {/* <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                        onChange={sendEmail}
                    /> */}
                    <h1>Did you know the moon has moonquakes? Weird.</h1>
                    <h1>Your message is currently traveling through time and space. Destination: our inbox. So be on the lookout for our BeeCat signal… ahem, email</h1>
                </div>
            }
            </>
            </section>
        </main>
    )
}