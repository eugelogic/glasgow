import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Tekton</title>
        <meta name="description" content="NextJS & Sanity proof of concept blog" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>

      <footer>
        <p>Footer Here</p>
      </footer>
    </div>
  )
}

export default Home