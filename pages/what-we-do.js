import Head from 'next/head'
import Image from 'next/image'

export default function WhatWeDo() {
    return (
        <main className="what-we-do">
            <Head>
                <title>BeeCat Creative | What We Do</title>
                <meta name="description" content="Beecat Creative What We Do" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className='what-we-do__heading'>
                <h1>What We Do</h1>
                <div className='about-header-image'>
                    <Image width={250} height={280} layout="responsive" priority={true} src='/images/what-we-do/hand.png' alt="BeeCat Creative | What We Do" />
                </div>
            </section>
            <section className='what-we-do__message'>
                <h1>BeeCat Creative specializes in giving business owners the gift of time.</h1>
            </section>
            <section className='what-we-do__answers'>
                <div className="answers-heading">
                    <h2>Our Services</h2>
                    <h1>Let our experience work for you</h1>
                </div>
                <div className='answers-col'>
                    <div className='answers-image'>
                        <Image width={180} height={280} layout="responsive" priority={true} src='/images/what-we-do/one.png' alt="BeeCat Creative | What We Do" />
                    </div>
                    <div className='answers-content'>
                        <h2>Create & Build</h2>
                        <p>Graphic Design / Content Creation /Photography / Video / 360 Digital Campaigns / Copywriting</p>
                    </div>
                </div>
                <div className='answers-col'>
                    <div className='answers-image'>
                        <Image width={180} height={280} layout="responsive" priority={true} src='/images/what-we-do/two.png' alt="BeeCat Creative | What We Do" />
                    </div>
                    <div className='answers-content'>
                        <h2>Execute & Analyze</h2>
                        <p>Social Media and Community Management / Media Buying / Analytics and Insight Reports / Strategic Partnership / Digital Optimization / Digital Audits / Influencer Strategy and Management</p>
                    </div>
                </div>
                <div className='answers-col'>
                    <div className='answers-image'>
                        <Image width={180} height={280} layout="responsive" priority={true} src='/images/what-we-do/three.png' alt="BeeCat Creative | What We Do" />
                    </div>
                    <div className='answers-content'>
                        <h2>Plan & Scheme</h2>
                        <p>Brand Identity and Strategy / Employer Brand / Research and Trend Forcasting / Digital Strategy</p>
                    </div>
                </div>
            </section>
            <section className='what-we-do__work'>
                <div className='what-we-do-grid'>

                </div>
            </section>
        </main>
    )
}