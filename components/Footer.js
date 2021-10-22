const Footer = ({ siteSettings }) => {

    return (
        <footer className="footer">
            <a href="https://github.com/eugelogic/glasgow" target="_blank" rel="noreferrer noopener">View Source Code</a>
            <p>&copy; {new Date().getFullYear()} {siteSettings.siteName}</p>
        </footer>
    )
}

export default Footer