import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import FormatDate from '../components/FormatDate'
import {
  sanityClient,
  urlFor
} from '../lib/sanity'

const postsQuery = `*[ _type == 'post']{
  _id,
  title,
  slug,
  excerpt,
  author->{
    name
  },
  mainImage,
  categories[]->{
    _id,
    title
  },
  publishedAt
}|order(publishedAt desc)`

export const getStaticProps = async () => {
  const posts = await sanityClient.fetch(postsQuery)
  return {
    props: {
      posts
    }
  }
}

const Home = ({ posts }) => {
// console.log(posts)
  return (
    <div>
      <Head>
        <title>Tekton</title>
        <meta name="description" content="NextJS & Sanity proof of concept blog" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <ul>
          {posts?.length > 0 && posts.map(post => (
            <li key={post._id}>
              <article>
                <Link href={`/posts/${post.slug.current}`}>
                  <a>
                    <Image src={urlFor(post.mainImage).url()} alt={post.mainImage.alt} width={600} height={400} />
                    <h2>{post.title}</h2>
                  </a>
                </Link>
                <h3>Category:</h3>
                <ul>{post.categories.map(cat => (
                  <li key={cat._id}>
                    {cat.title}
                  </li>
                  ))}</ul>
                <p>{post.excerpt}</p>
                <h3>Written by: {post.author.name}</h3>
                <h3>Published on <time dateTime={post.publishedAt}><FormatDate date={post.publishedAt} /></time></h3>
              </article>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <p>Footer Here</p>
      </footer>
    </div>
  )
}

export default Home