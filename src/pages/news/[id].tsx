import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'

const NewsDetail: NextPage = () => {
  const router = useRouter()
  const {id} = router.query;
  return (
    <div className={styles.container}>
      <h2>NewsDetail Page</h2>
      <p>news id: {id}</p>
      <Link href="/news">
        <a>back</a>
      </Link>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default NewsDetail
