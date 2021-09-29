import { useRouter } from 'next/router'
import {
    sanityClient,
    PortableText
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
    const router = useRouter()
    if (router.isFallback) {
        return <div><p>Loading ...</p></div>
    }
    const { post } = data
    // console.log(post)
    return (
        <article>
            <h1>{post.title}</h1>
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