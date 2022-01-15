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
                <Image width={400} height={280} layout="responsive" priority={true} src='/images/landing/cat.png' alt="BeeCat Creative | Homepage Cat" />
            </div>
        </section>
        <section className='landing-bottom'>
          <div className="landing-bottom__img">
              <Image width={400} height={280} layout="responsive" priority={true} src='/images/landing/bee.png' alt="BeeCat Creative | Homepage Bee" />
          </div>
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
              <Image width={300} height={280} layout="responsive" priority={true} src='/images/landing/pan.png' alt="BeeCat Creative | Homepage Bee" />
            </div>
          </div>
          <div className='results-cta'>
            <button>learn more</button>
          </div>
        </section>
      </div>
    </div>
  )
}
