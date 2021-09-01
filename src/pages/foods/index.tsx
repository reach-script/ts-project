import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css';

type Food = {
  id: string;
  name: string;
  price: number;
};
type Props = {
  foods: Array<Food>;
};

const Foods: NextPage<Props> = (props) => {
  // const { foods } = props;
  const [foods, setFoods] = useState<Array<Food>>([]);
  useEffect(() => {
    const getFoods = async () => {
      const response = await fetch('api/food');
      const data = await response.json();
      setFoods(data);
    };
    getFoods();
  }, []);
  return (
    <div className={styles.container}>
      <h2>Foods Page</h2>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
};

export default Foods;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const foods = [
//     { id: "1", name: "ラーメン", price: 1000 },
//     { id: "2", name: "焼肉", price: 2000 }
//   ]
//   console.log(foods)
//   return {
//     props: { foods }
//   }
// }
