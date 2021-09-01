import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'

const UsersDetail: NextPage = () => {
  const router = useRouter()
  const {params} = router.query;
  console.log(params)
  return (
    <div className={styles.container}>
      <h2>UserDetail Page</h2>
      <Link href="/users">
        <a>back</a>
      </Link>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default UsersDetail
