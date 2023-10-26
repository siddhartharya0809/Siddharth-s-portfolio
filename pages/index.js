import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import App from "../components/Experience.jsx"

export default function Home() {
  return (
    <div>
      <Head>
      <link rel="shortcut icon" href="../public/favicon.ico" />
        <title>Siddharth | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        {/* <link rel="icon" href="/fav.png" /> */}
      </Head>
      <Main />
      <About />
      <App />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
