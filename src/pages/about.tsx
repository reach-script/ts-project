import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { Button } from '../components/Button';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>About Page</h2>

      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
};

export default About;
