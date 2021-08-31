import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_KEY)
  console.log(process.env.TEST)
  return (
    <div className={styles.container}>
      <Link href="/about-old">
        <a>about</a>
      </Link>
    </div>
  )
}

export default Home
