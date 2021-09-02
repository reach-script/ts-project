import type { NextPage } from 'next';
import Image from 'next/image';
const Gallery: NextPage = () => {
  return (
    <div>
      <h2>Gallery Page</h2>
      <Image src="/raisetech.svg" alt="" width={200} height={120} />
    </div>
  );
};
export default Gallery;
