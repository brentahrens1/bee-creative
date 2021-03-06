import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className='footer-header'>
                <h1>LET&apos;S BUILD TOGETHER</h1>
                <div className="footer-header__img">
                    <Image width={300} height={280} layout="responsive" priority={true} src='/images/footer/builders.png' alt="BeeCat Creative | Builders" />
                </div>
            </div>
            <div className='footer-contacts'>
                <div>
                    <h2>Follow Us</h2>
                    <div className='footer-contacts-socials'>
                        <a href="https://www.instagram.com/beecatcreative" target="_blank" rel="noopener noreferrer">
                            <div className='icon'>
                                <Image width={180} height={170} layout="responsive" priority={true} src="/images/footer/instagram.png" alt="Instagram" />
                            </div>
                        </a>
                        <a href="https://www.facebook.com/beecatcreative" target="_blank" rel="noopener noreferrer">
                            <div className='icon'>
                                <Image width={180} height={170} layout="responsive" priority={true} src="/images/footer/facebook.png" alt="Facebook" />
                            </div>
                        </a>
                    </div>
                    <p>© 2022 BeeCat Creative</p>
                </div>
                <div className='footer-site-map'>
                    <div className='site-map--left'>
                        <h2>Site Map</h2>
                        <p><Link href='/about-us'><a>About us</a></Link></p>
                        <p><Link href='/what-we-do'><a>What We Do</a></Link></p>
                        <p><Link href='/contact'><a>Contact</a></Link></p>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <p><a href='mailto:hello@beecatcreative.com' target="_blank" rel="noopener noreferrer">hello@beecatcreative.com</a></p>
                        <p>Frederick, MD</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer