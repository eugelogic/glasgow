const Footer = ({ siteSettings }) => {

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} {siteSettings.siteName}</p>
        </footer>
    )
}

export default Footer