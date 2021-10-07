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
            </Head>
            <Header siteSettings={siteSettings} />
                {children}
            <Footer siteSettings={siteSettings} />
        </>
    )
}

export default Layout