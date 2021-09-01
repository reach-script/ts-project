import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css';

type Product = {
  id: string;
  name: string;
  price: number;
};

const mockProducts = [
  {
    id: '1',
    name: '商品A',
    price: 1000,
  },
  {
    id: '2',
    name: '商品B',
    price: 2000,
  },
  {
    id: '3',
    name: '商品C',
    price: 3000,
  },
];

const Products: NextPage = () => {
  const [products, setProducts] = useState<Array<Product> | null>(null);

  const onClickFetch = () => {
    setProducts(mockProducts);
  };

  return (
    <div className={styles.container}>
      <h2>Products Page</h2>
      <button onClick={onClickFetch}>取得</button>
      <ul>
        <>
          {products?.map((product) => (
            <li key={product.id}>
              {product.name} : ¥{product.price.toLocaleString()}
            </li>
          ))}
        </>
      </ul>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
};

export default Products;
