import Head from 'next/head'

export default function ContactForm() {
  return (
    <div>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Bee Creative | Contact Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className="contact-form">
            <label>Name</label>
            <div className="name-fields">
                <input type="text" name="first-name" placeholder="First Name" />
                <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <label>Email</label>
            <input type="email" name="last-name" />
            <label>Let it all out. We're here for you.</label>
            <textarea rows="8" cols="50"></textarea>
            <input type="submit" value="Godspeed" />
      </form>
    </div>
  )
}