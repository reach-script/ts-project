import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Profile Page</h2>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default Profile
