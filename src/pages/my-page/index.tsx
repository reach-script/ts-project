import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

const MyPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>MyPage Page</h2>
      <Link href="/my-page/profile">
        <a>profile</a>
      </Link>
      <Link href="/my-page/favorites">
        <a>favorites</a>
      </Link>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default MyPage
