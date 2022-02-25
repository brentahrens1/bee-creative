import Head from 'next/head'
import Image from 'next/image'
import Questions from '../components/Questions/Questions'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="main-container">
      <Head>
        <title>BeeCat Creative</title>
        <meta name="description" content="BeeCat is a creative agency that cuts through the noise with beautifully crafted digital solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="landing">
        <section className='landing-top'>
            <div className="landing-top__img">
                <Image width={500} height={280} layout="responsive" priority={true} src='/images/header.jpg' alt="BeeCat Creative | Spaceman" />
            </div>
            <div className="landing-top__text">
                <Image width={500} height={280} layout="responsive" priority={true} src='/images/header-text.png' alt="BeeCat Creative | Banner text" />
            </div>
        </section>
        <section className='landing-bottom'>
          {/* <div className="landing-bottom__img">
              <Image width={400} height={280} layout="responsive" priority={true} src='/images/landing/bee.png' alt="BeeCat Creative | Homepage Bee" />
          </div> */}
          <div className='landing-bottom__text'>
              <h1>BeeCat is a creative agency that cuts through the noise with beautifully crafted digital solutions</h1>
          </div>
        </section>
        <Questions />
        <section className='landing__produce-results'>
          <div className='results-heading'>
            <p>OUR CAPABILITIES</p>
            <h1>Success after success,</h1>
            <h1>we keep stacking &apos;em</h1>
          </div>
          <div className='results-images'>
            <div className='results-images-box'>
            </div>
            <div className='results-images-image'>
              <Image width={160} height={280} layout="responsive" priority={true} src='/images/landing/macaroons.png' alt="BeeCat Creative | OUR CAPABILITIES" />
            </div>
          </div>
          <p className='results-message'>Plan / Create / Execute</p>
          <div className='results-cta'>
            <button><Link href="/about-us"><a>learn more</a></Link></button>
          </div>
        </section>
        <section className='landing__work'>
          <div className='work-heading'>
            <p>OUR WORK</p>
            <h1>The Stuff Our Moms</h1>
            <h1>Brag About</h1>
          </div>
          <div className='work-grid'>
            <div className='work-grid-cell'>
              <div className='word-grid-cell-image'>
                <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-1.png' alt="BeeCat Creative | LSWG Employer Branding" />
              </div>
              <h2>LSWG Employer Branding</h2>
              <p>Leverage the brand to improve employee communication and strengthen company culture.</p>
            </div>
            <div className='work-grid-cell'>
              <div className='word-grid-cell-image'>
                <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-3.png' alt="BeeCat Creative | Robinwood Smiles Digital Build" />
              </div>
              <h2>Robinwood Smiles Digital Build</h2>
              <p>Optimize and engage to increase brand awareness through social media.</p>
            </div>
            <div className='work-grid-cell'>
              <div className='word-grid-cell-image'>
                <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-2.png' alt="BeeCat Creative | Lovettsville Town Commons Rebrand" />
              </div>
              <h2>Lovettsville Town Commons Rebrand</h2>
              <p>Brand Identity and Strategy to bring life to a new commercial build in Lovettsville, VA.</p>
            </div>
          </div>
          <div className='work-cta'>
            <button><Link href="/what-we-do"><a>More Work</a></Link></button>
          </div>
        </section>
      </div>
    </div>
  )
}
