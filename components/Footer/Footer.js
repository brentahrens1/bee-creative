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
                    <div className='footer-contacts-socials'>
                        <div className='icon'>
                            <Image width={180} height={180} layout="responsive" priority={true} src="/images/footer/instagram.png" alt="Instagram" />
                        </div>
                        <div className='icon'>
                            <Image width={180} height={180} layout="responsive" priority={true} src="/images/footer/facebook.png" alt="Facebook" />
                        </div>
                    </div>
                </div>
                <div className='footer-site-map'>
                    <h2>Site Map</h2>
                    <p>About us</p>
                    <p>What We Do</p>
                    <p>Contact</p>
                    <div style={{marginTop: '2.5rem'}}>
                        <h2>Contact</h2>
                        <p>Meghan@beecatcreative.com</p>
                        <p style={{marginTop: '1.5rem'}}>Frederick, MD</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer