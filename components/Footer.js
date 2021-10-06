const Footer = ({ siteName }) => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} {siteName}</p>
        </footer>
    )
}

export default Footer