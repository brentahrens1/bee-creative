import Image from 'next/image'

const Landing = () => {
    return (
        <div className="landing">
            <div className='landing-top'>
                <div className="landing-top__img">
                    <Image width={400} height={280} layout="responsive" priority={true} src='/images/landing/cat.png' alt="BeeCat Creative | Homepage" />
                </div>
            </div>
            <div className='landing-bottom'>
                <div className="landing-bottom__img">
                    <Image width={400} height={280} layout="responsive" priority={true} src='/images/landing/bee.png' alt="BeeCat Creative | Homepage" />
                </div>
                <div className='landing-bottom__text'>
                    <h1>Creatively speaking...</h1>
                    <h1>we don’t just scratch the surface</h1>
                    <h1>we like to create the buzz!</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing