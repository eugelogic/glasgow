const Footer = ({ siteSettings }) => {

    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} {siteSettings.siteName}</p>
        </footer>
    )
}

export default Footer