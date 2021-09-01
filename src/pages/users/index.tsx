import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'


const Users: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Users Page</h2>
      <Link href="/users/a/b">
        <a>detail</a>
      </Link>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default Users
