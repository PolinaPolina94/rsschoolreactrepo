import Image from 'next/image';
import styles from '../styles/Person.module.css';
import { Item } from '@/types/types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Loader from './Loader';

type Person = {
  items: Item[] | undefined;
};

const Person = (props: Person) => {
  let array;
  if (props.items) {
    array = props.items;
  }
  const router = useRouter();
  const { page } = router.query;
  const namePer = router.query.name;
  const idDetail = Number(router.query.details);
  const person = array?.filter((el) => el.id === idDetail);
  if (person) {
    const { name, id, image, species, gender, status, location, created } = person[0];
    if (location && created) {
      return (
        <>
          <div> DETAILS </div>
          {router.isFallback && (
            <div>
              {' '}
              <Loader />
            </div>
          )}
          <div role="person" className={styles.wrapper}>
            <div className={styles.headerItem}>
              <h1 className={styles.personName}> {name} </h1>
              <p className={styles.id}>
                {' '}
                IDENTIFICATION-NUMBER: <span> {id} </span>{' '}
              </p>
              <Link
                href={`/?page=${page}&name=${namePer}`}
                onClick={() => {
                  console.log(router.isFallback);
                }}
              >
                <button className={styles.button}> x </button>
              </Link>
            </div>
            <div className={styles.container}>
              <div>
                <Image
                  src={image}
                  className={styles.img}
                  width={200}
                  height={200}
                  alt="person photo"
                />
              </div>
              <div className={styles.details}>
                <p>
                  {' '}
                  <span className={styles.more}> Species: </span> {species}{' '}
                </p>
                <p>
                  {' '}
                  <span className={styles.more}> Status: </span> {status}{' '}
                </p>
                <p>
                  {' '}
                  <span className={styles.more}> Gender: </span> {gender}{' '}
                </p>
                <p>
                  {' '}
                  <span className={styles.more}> Planet: </span> {location.name}{' '}
                </p>
                <span className={styles.created}> Was created in: {parseInt(created)}</span>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
};
export default Person;
