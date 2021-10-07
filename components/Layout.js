import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ siteSettings, children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{siteSettings?.siteName}</title>
                <meta name="description" content={siteSettings?.description} />
            </Head>
            <Header siteSettings={siteSettings} />
                {children}
            <Footer siteSettings={siteSettings} />
        </>
    )
}

export default Layout