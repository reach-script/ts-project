import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Home: NextPage = () => {
  const router = useRouter();
  const onClickAbout = () => router.push('/about');
  return (
    <div className={styles.container}>
      <button onClick={onClickAbout}>about</button>
      <Link href="/my-page">
        <a>my-page</a>
      </Link>
      <Link href="/news">
        <a>news</a>
      </Link>
      <Link href="/users">
        <a>users</a>
      </Link>
      <Link href="/products">
        <a>products</a>
      </Link>
      <Link href="/foods">
        <a>foods</a>
      </Link>
    </div>
  );
};

export default Home;
