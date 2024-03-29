import Head from 'next/head'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <main className="about-us">
            <Head>
                <title>BeeCat Creative | About Us</title>
                <meta name="description" content="professional, wacky, creative explorers" />
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
                    <Image width={280} height={280} layout="responsive" priority={true} src='/images/about/watermelon.png' alt="BeeCat Creative | Who We Are" />
                </div>
            </section>
            <section className="about-us__breakdown">
                <div className='about-breakdown-heading'>
                    <h2>Special Ingredients</h2>
                    <h1>The Beecat</h1>
                    <h1>creative sauce</h1>
                </div>
                <div className='about-breakdown-col'>
                    <div className='about-col-image'>
                        <Image width={220} height={280} layout="responsive" priority={true} src='/images/about/robot-1.png' alt="BeeCat Creative | Special Ingredients" />
                    </div>
                    <div className='about-col-content'>
                        <h2>Let’s Build Together</h2>
                        <p>It all starts with a conversation. At BeeCat, we take the time to dive deep into your business, focusing on industry trends, competitive landscape, and audience behavior. Then we work with you to layout a comprehensive plan that positions your brand for success. Dollar, dollar bills y&apos;all.</p>
                    </div>
                </div>
                <div className='about-breakdown-col about-breakdown-col-2'>
                    <div className='about-col-content'>
                        <h2>Creating Your Brand</h2>
                        <p>After compiling research, it’s time to translate your competitive strategy into a unique look and feel that stands out in a crowded marketplace. Then we create custom content to broadcast your brand personality out into the big, wide universe. Put on your space pants and prepare for launch.</p>
                    </div>
                    <div className='about-col-image'>
                        <Image width={220} height={280} layout="responsive" priority={true} src='/images/about/robot-2.png' alt="BeeCat Creative | Creating Your Brand" />
                    </div>
                </div>
                <div className='about-breakdown-col'>
                    <div className='about-col-image'>
                        <Image width={220} height={280} layout="responsive" priority={true} src='/images/about/robot-3.png' alt="BeeCat Creative | Measuring Impact" />
                    </div>
                    <div className='about-col-content'>
                        <h2>Measuring Impact</h2>
                        <p>Your marketing journey doesn’t end with content creation. At BeeCat, we constantly gather data and feedback in order to track your brand’s reach and influence. This allows us to instantaneously refine content and messaging, leading to optimized performance and ROI. The best results are the ones you can measure.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}