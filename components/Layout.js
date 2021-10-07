import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ siteSettings, children }) => {
    return (
        <>
            <Head>
                <title>{siteSettings?.siteName}</title>
                <meta name="description" content={siteSettings?.description} />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <Header siteSettings={siteSettings} />
                {children}
            <Footer siteSettings={siteSettings} />
        </>
    )
}

export default Layout