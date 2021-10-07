import Link from 'next/link'

const Header = ({ siteSettings }) => {

    return(
        <header className="header">
            <Link href="/">
                <a aria-label="Go Home">
                    <h1 className="site-title">{siteSettings.siteName}</h1>
                </a>
            </Link>
        </header>
    )
}

export default Header