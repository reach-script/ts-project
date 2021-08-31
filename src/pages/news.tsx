import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const News: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_KEY)
  console.log(process.env.TEST)
  return (
    <div className={styles.container}>
      <h2>News Page</h2>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default News
