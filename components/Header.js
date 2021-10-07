import Link from 'next/link'

const Header = ({ siteSettings }) => {

    return(
        <header className="header">
            <Link href="/">
                <a aria-label="Go Home">
                    <span className="site-title">{siteSettings.siteName}</span>
                </a>
            </Link>
        </header>
    )
}

export default Header