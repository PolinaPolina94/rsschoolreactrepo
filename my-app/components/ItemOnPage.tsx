import { Item } from '@/types/types';
import Image from 'next/image';
import styles from '../styles/ItemOnPage.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
const ItemOnPage = (props: Item) => {
  const router = useRouter();
  const { page, name } = router.query;
  return (
    <div id={'itemPerson'} className={styles.itemwrapper}>
      <div className={styles.view}>
        <span> {props.name} </span>
        <Link
          href={`/?page=${page}&name=${name}&details=${props.id}`}
          role="img"
          className={styles.link}
        >
          <Image
            src={props.image}
            alt="person photo"
            id="rockNew"
            width={100}
            height={100}
            className={styles.itemimg}
          ></Image>
        </Link>
      </div>
      <div className={styles.description}>
        <span> Description 👾 </span>
        <div className={styles.descriptionList}>
          <span>species: {props.species}</span>
          <span>planet: {props.planet} 🪐</span>
          <span>gender: {props.gender} </span>
        </div>
      </div>
    </div>
  );
};

export default ItemOnPage;
