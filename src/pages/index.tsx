import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/my-page">
        <a>my-page</a>
      </Link>
      <Link href="/news">
        <a>news</a>
      </Link>
      <Link href="/users">
        <a>users</a>
      </Link>
    </div>
  )
}

export default Home
