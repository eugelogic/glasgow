import { useRouter } from 'next/router'
import { useState } from 'react'
import { BiLike } from "react-icons/bi";
import Image from 'next/image'
import {
    sanityClient,
    PortableText,
    urlFor
} from '../../lib/sanity'

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
    return {
        props: {
            data: { post }
        }
    }
}

const Post = ({ data }) => {

    const [likes, setLikes] = useState(data?.post?.likes)
    const handleLike = async () => {
        const res = await fetch('/api/handle-like', {
            method: 'POST',
            body: JSON.stringify({ _id: post._id})
        }).catch((error) => console.log(error))

        const data = await res.json()
        setLikes(data.likes)
    }

    const router = useRouter()
    if (router.isFallback) {
        return <div><p>Loading ...</p></div>
    }

    const { post } = data
    // console.log(post)
    console.log(likes)
    return (
        <article>
            <h1>{post.title}</h1>
            <Image src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} width={600} height={400} />
            <div>
                <button onClick={handleLike}>
                    {likes} <BiLike />
                </button>
            </div>
            <h3>Category:</h3>
            <ul>{post.categories.map(cat => (
                <li key={cat._id}>
                    {cat.title}
                </li>
            ))}</ul>
            <PortableText blocks={post.body} />
            <footer>
                <p>Published on:{' '}
                    <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    {' '}by {post.author.name}
                </p>
            </footer>
        </article>
    )
}

export default Post