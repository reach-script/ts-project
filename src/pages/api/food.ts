import { NextApiHandler } from 'next';
const handler: NextApiHandler = (req, res) => {
  const foods = [
    { id: '1', name: 'ラーメン', price: 1000 },
    { id: '2', name: '焼肉', price: 2000 },
  ];
  console.log(foods);
  res.status(200).json(foods);
};
export default handler;
