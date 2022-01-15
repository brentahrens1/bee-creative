import Head from 'next/head'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <main className="about-us">
            <Head>
                <title>BeeCat Creative | About Us</title>
                <meta name="description" content="Beecat Creative About Us" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="about-us__header">
                <div className='about-header-image'>
                    <Image width={400} height={280} layout="responsive" priority={true} src='/images/about/camera.png' alt="BeeCat Creative | About Us" />
                </div>
                <div className='about-header-heading'>
                    <h1>About Us</h1>
                </div>
            </section>
            <section className="about-us__message">
                <div className='about-message-content'>
                    <h3>Who We Are</h3>
                    <h1>professional, wacky, creative explorers</h1>
                    <p>We start by building deep relationships with our clients, allowing us to design better solutions for all of their creative challenges. Let us do the hard work, so you don&apos;t have to.</p>
                </div>
                <div className='about-message-image'>
                    <Image width={220} height={280} layout="responsive" priority={true} src='/images/about/watermelon.png' alt="BeeCat Creative | About Us" />
                </div>
            </section>
            <section className="about-us__breakdown">

            </section>
        </main>
    )
}