import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div className='footer-header'>
                <h1>LETS BUILD TOGETHER</h1>
                <div className="footer-header__img">
                    <Image width={300} height={280} layout="responsive" priority={true} src='/images/footer/builders.png' alt="BeeCat Creative | Homepage Bee" />
                </div>
            </div>
            <div className='footer-contacts'>
                <div>
                    <h2>Follow Us</h2>
                    <p>Socials</p>
                </div>
                <div>
                    <h2>Contact</h2>
                    <p>Meghan@beecatcreative.com</p>
                </div>
                <div>
                    <h2>Back to Top</h2>
                    <p>Frederick, MD</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer