import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isScrolled, setIsScrolled ] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else if (window.scrollY < 10) {
                setIsScrolled(false)
            }
        })
    }, [])

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav__logo">
                <Link href="/">
                    <a><Image width={600} height={280} layout="responsive" priority={true} src='/images/beecat-creative-logo.png' alt="BeeCat Creative | Logo" /></a>
                </Link>
            </div>
            <div className="nav__list">
                <ul>
                    <li><Link href="/about-us"><a>About Us</a></Link></li>
                    <li><Link href="/what-we-do"><a>What We Do</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className={`nav__hamburger ${isOpen ? 'close' : ''}`}>
                <div className='bar' />
                <div className='bar' />
                <div className='bar' />
            </div>
            <div className={`nav__overlay ${isOpen ? 'show' : ''}`}>
                <ul>
                    <li><Link href="/about-us"><a>About Us</a></Link></li>
                    <li><Link href="/what-we-do"><a>What We Do</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav