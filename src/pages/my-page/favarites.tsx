import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Favorites: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Favorites Page</h2>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default Favorites
