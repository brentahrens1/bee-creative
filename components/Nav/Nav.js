import { useState } from 'react'
import Image from 'next/image'

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <nav className="nav">
            <div className="nav__logo">
                <Image width={600} height={280} layout="responsive" priority={true} src='/images/beecat-creative-logo.png' alt="BeeCat Creative | Logo" />
            </div>
            <div className="nav__list">
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className={`nav__hamburger ${isOpen ? 'close' : ''}`}>
                <div className='bar' />
                <div className='bar' />
                <div className='bar' />
            </div>
            <div className={`nav__overlay ${isOpen ? 'show' : ''}`}>
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav