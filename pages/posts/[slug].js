import { useRouter } from 'next/router'
import { useState } from 'react'
import { BiLike } from "react-icons/bi";
import Image from 'next/image'
import Layout from '../../components/Layout';
import FormatDate from '../../components/FormatDate'
import {
    sanityClient,
    PortableText,
    urlFor
} from '../../lib/sanity'
import { useCookies } from 'react-cookie';

const siteSettingsQuery = `*[ _type == 'siteSettings' ][0]{
    siteName,
    description
}`

const postQuery = `*[ _type == 'post' && slug.current == $slug ][0]{
    _id,
    title,
    slug,
    author->{
        name
    },
    mainImage,
    categories[]->{
        _id,
        title
    },
    publishedAt,
    body,
    likes
}`

export const getStaticPaths = async () => {
    const paths = await sanityClient.fetch(
        `*[ _type == 'post' && defined(slug.current)]{
            'params': {
                'slug': slug.current
            }
        }`
    )
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params
    const post = await sanityClient.fetch(postQuery, { slug })
    const siteSettings = await sanityClient.fetch(siteSettingsQuery)
    return {
        props: {
            siteSettings,
            data: { post },
        }
    }
}

const Post = ({ siteSettings, data }) => {

    const [disableButton, setDisableButton] = useState(false)
    const [cookies, setCookie] = useCookies()
    const [likes, setLikes] = useState(data?.post?.likes)

    const handleLike = async () => {
        // console.log(cookies)
        // console.log(cookies.cookieLike)
        // console.log(post._id)
        // console.log(post.slug.current)
        if (cookies.cookieLike != post._id) {
            setDisableButton(true)
            setCookie('cookieLike', post._id, {
                path: `/posts/${post.slug.current}`,
                maxAge: 60000
            })
            const res = await fetch('/api/handle-like', {
                method: 'POST',
                body: JSON.stringify({ _id: post._id})
            }).catch((error) => console.log(error))

            const data = await res.json()
            setLikes(data.likes)

        } return
    }

    const router = useRouter()
    if (router.isFallback) {
        return <div><p>Loading ...</p></div>
    }

    const { post } = data
    // console.log(post)
    // console.log(likes)
    return (
        <Layout siteSettings={siteSettings} post={post}>
            <article className="single-post">
                <h1>{post.title}</h1>
                <Image src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} width={600} height={400} />
                <div className="like">
                    <span>Like</span>
                    <button onClick={handleLike} disabled={disableButton}>
                        {likes}<BiLike />
                    </button>
                </div>
                <div className="category">Category:
                    <ul>{post.categories.map(cat => (
                        <li key={cat._id}>
                            {cat.title}
                        </li>
                    ))}</ul>
                </div>
                <div className="body">
                    <PortableText blocks={post.body} />
                </div>
                <footer>
                    Published on:{' '}
                    <time dateTime={post.publishedAt}>
                        <FormatDate date={post.publishedAt} />
                    </time>
                    {' '}by {post.author.name}
                </footer>
            </article>
        </Layout>
    )
}

export default Post