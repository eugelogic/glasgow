/* eslint(@next/next/no-page-custom-font) */
import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ siteSettings, post, children }) => {

    const router = useRouter()
    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{router.pathname === '/' ? `${siteSettings?.shortDescription} | ${siteSettings?.siteName}` : `${post?.title} | ${siteSettings?.siteName}`}</title>
                <meta name="description" content={siteSettings?.description} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                {/* <link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Montserrat:wght@400&display=swap" rel="stylesheet" /> */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Gruppo&family=Montserrat&display=swap" rel="stylesheet" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Montserrat:wght@400;600&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="container">
                <Header siteSettings={siteSettings} />
                    {children}
                <Footer siteSettings={siteSettings} />
            </div>
        </>
    )
}

export default Layout