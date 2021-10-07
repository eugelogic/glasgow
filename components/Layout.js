import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ siteSettings, children }) => {
    return (
        <div>
            <Header siteSettings={siteSettings} />
                {children}
            <Footer siteSettings={siteSettings} />
        </div>
    )
}

export default Layout