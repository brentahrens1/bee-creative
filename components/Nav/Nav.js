import Image from 'next/image'

const Nav = () => {
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
        </nav>
    )
}

export default Nav