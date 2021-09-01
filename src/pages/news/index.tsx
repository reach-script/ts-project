import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

const ids = [1,2,3]

const News: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>News Page</h2>
      {ids.map(id => (
        <Link key={id} href={`/news/${id}`}>
          <a>news id: {id}</a>
        </Link>
      ))}
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default News
