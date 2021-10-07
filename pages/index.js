import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import FormatDate from '../components/FormatDate'
import {
  sanityClient,
  urlFor
} from '../lib/sanity'

const siteSettingsQuery = `*[ _type == 'siteSettings' ][0]{
  siteName,
  shortDescription,
  description
}`

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
  const siteSettings = await sanityClient.fetch(siteSettingsQuery)
  return {
    props: {
      siteSettings,
      posts
    }
  }
}

const Home = ({ siteSettings, posts }) => {
// console.log(posts)
// console.log(siteSettings)
  return (
    <Layout siteSettings={siteSettings} >
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
                <div>Category:
                  <ul>{post.categories.map(cat => (
                    <li key={cat._id}>
                      {cat.title}
                    </li>
                  ))}</ul>
                </div>
                <div>
                  <p>{post.excerpt}</p>
                </div>
                <div>
                  Published on{' '}
                  <time dateTime={post.publishedAt}><FormatDate date={post.publishedAt} /></time>
                  {' '} by {post.author.name}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export default Home