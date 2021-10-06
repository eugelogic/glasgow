const Header = ({ siteSettings }) => {

    return(
        <header className="header">
            <h1 className="site-title">{siteSettings.siteName}</h1>
        </header>
    )
}

export default Header