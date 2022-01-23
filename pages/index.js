import Head from 'next/head'
import Image from 'next/image'
import Questions from '../components/Questions/Questions'

export default function Home() {

  return (
    <div className="main-container">
      <Head>
        <title>BeeCat Creative</title>
        <meta name="description" content="Beecat Creative Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="landing">
        <section className='landing-top'>
            <div className="landing-top__img">
                <Image width={500} height={280} layout="responsive" priority={true} src='/images/header.jpg' alt="BeeCat Creative | Homepage Cat" />
            </div>
            <div className="landing-top__text">
                <Image width={500} height={280} layout="responsive" priority={true} src='/images/header-text.png' alt="BeeCat Creative | Homepage Cat" />
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
            <h1>Let us produce sweet</h1>
            <h1>results for you</h1>
          </div>
          <div className='results-images'>
            <div className='results-images-box'>
              <p>Plan & Scheme, Create & Build, Execute & Analyze</p>
            </div>
            <div className='results-images-image'>
              <Image width={150} height={280} layout="responsive" priority={true} src='/images/landing/macaroons.png' alt="BeeCat Creative | Homepage Bee" />
            </div>
          </div>
          <div className='results-cta'>
            <button>learn more</button>
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
                <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-1.png' alt="BeeCat Creative | Homepage Bee" />
              </div>
              <h2>Project Name</h2>
              <p>SUB NAME</p>
            </div>
            <div className='work-grid-cell'>
              <div className='word-grid-cell-image'>
                <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-2.png' alt="BeeCat Creative | Homepage Bee" />
              </div>
              <h2>Project Name</h2>
              <p>SUB NAME</p>
            </div>
            <div className='work-grid-cell'>
              <div className='word-grid-cell-image'>
                <Image width={150} height={150} layout="responsive" priority={true} src='/images/work/work-3.png' alt="BeeCat Creative | Homepage Bee" />
              </div>
              <h2>Project Name</h2>
              <p>SUB NAME</p>
            </div>
          </div>
          <div className='work-cta'>
            <button>More Work</button>
          </div>
        </section>
      </div>
    </div>
  )
}
