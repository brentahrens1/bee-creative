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
                <h1>BeeCat Creative specializes in giving business owners the gift of time</h1>
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
                <h1>We&apos;re not shy, but we like to let our work do the talking. Check it out</h1>
                <div className='what-we-do-grid'>
                    <div className='what-we-do-grid-cell'>
                        <div className='what-we-do-grid-cell-image'>
                            <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-1.png' alt="BeeCat Creative | Homepage Bee" />
                        </div>
                        <h2>LSWG Employer Branding</h2>
                        <h3>Leverage the brand to improve employee communication and strengthen company culture.</h3>
                        <p>LSWG approached us with a difficult task— help build a sense of community among their employees and bring them together emotionally during a time when they were physically apart. We set to work developing marketing initiatives to optimize internal communication and engage their employees, both in and out of the office. Through a series of employee-centric videos, community outreach programs, and interdepartmental events, we bolstered the internal culture, and the staff at LSWG now reports feeling more satisified in their job and more emotionally connected to their coworkers. With our help, upper management now has more free time to work on big picture company intiatives, knowing we&apos;re there to keep the good times rolling.</p>
                        <ul>
                            <li className='work-list-header'>What We Did:</li>
                            <li>Copywriting</li>
                            <li>Video Production</li>
                            <li>Photography</li>
                            <li>Industry Research</li>
                            <li>Internal Communication Plan</li>
                            <li>Team Building Research</li>
                        </ul>
                        </div>
                    <div className='what-we-do-grid-cell'>
                        <div className='what-we-do-grid-cell-image'>
                            <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-2.png' alt="BeeCat Creative | Homepage Bee" />
                        </div>
                        <h2>Robinwood Smiles Digital Build</h2>
                        <h3>Brand Awareness through Social Media Presence</h3>
                        <p>When Robinwood Smiles expanded to a second location, they asked us to help build awareness for both their new and existing practices. The goal was to build a consistent social media presence that communicated their services and celebrated their fun work environment and to do it without investing significantly in paid advertising. That sounds like our kind of challenge, so we set to work creating unique content for Facebook, Instagram, and TikTok, keeping a close eye on engagement metrics to measure reach and optimize messaging. The work paid off and In a relatively short amount of time, we&apos;ve increased Robinwood Smiles Facebook page visits by 55% and increased their Instagram page visits by 626%, all without spending a dime on paid advertising. Oh, and not to humblebrag, but we aren&apos;t too shabby on TikTok either. In one year, we&apos;ve created three organic viral videos that racked up over 500 million views. WOW!</p>
                        <ul>
                            <li className='work-list-header'>What We Did:</li>
                            <li>Research and Forecasting</li>
                            <li>Digital Strategy</li>
                            <li>Graphic Design</li>
                            <li>Content Creation</li>
                            <li>Video Production</li>
                            <li>Copywriting</li>
                            <li>Social Media and Community Management</li>
                            <li>Digital Optimization</li>
                        </ul>
                    </div>
                    <div className='what-we-do-grid-cell'>
                        <div className='what-we-do-grid-cell-image'>
                            <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-3.png' alt="BeeCat Creative | Homepage Bee" />
                        </div>
                        <h2>Lovettsville Town Commons Rebrand</h2>
                        <h3>Brand Identity and Strategy to bring life to a new commercial build in Lovettsville, VA.</h3>
                        <p>When we started our relationship with Lovettsville Town Commons, there was one significant marketing issue that needed to be addressed— their original name was almost identical to an adjacent shopping center, which was creating brand confusion among potential tenants. As a result, LTC&apos;s ability to future investments was limited. So we dove headfirst into competitive market research, used our newly discovered community insights to rebrand the entire development project, and created a distinct brand identity to better differentiate it within the Lovettsville community.</p>
                        <ul>
                            <li className='work-list-header'>What We Did:</li>
                            <li>Brand Identity and Strategy</li>
                            <li>Industry Research</li>
                            <li>Logo Ideation and Brand Guidelines</li>
                            <li>SEO and Keyword Research</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}