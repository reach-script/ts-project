import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const About: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_KEY)
  console.log(process.env.TEST)
  return (
    <div className={styles.container}>
      <h2>About Page</h2>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default About
