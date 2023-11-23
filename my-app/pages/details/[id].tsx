import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import styles from '../../styles/Person.module.css';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
    id: string;
  }

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { id } = ctx.params as Params;
    const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return { 
      props:  {
      result: await result.json()
    }}
  }

const Person = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
      return (
        <div role="person" className={styles.wrapper}>
          <div className={styles.headerItem}>
            <h1 className={styles.personName}> {props.result.name} </h1>
            <p className={styles.id}>
              {' '}
              IDENTIFICATION-NUMBER: <span> {props.result.id} </span>{' '}
            </p>
            <button className={styles.button} onClick={()=>{}}>
              {' '}
              x{' '}
            </button>
          </div>
          <div className={styles.container}>
            <div>
              <Image src={props.result.image} className={styles.img} width={200} height={200} alt='person photo' />
            </div>
            <div className={styles.details}>
              <p>
                {' '}
                <span className={styles.more}> Species: </span> {props.result.species}{' '}
              </p>
              <p>
                {' '}
                <span className={styles.more}> Status: </span> {props.result.status}{' '}
              </p>
              <p>
                {' '}
                <span className={styles.more}> Gender: </span> {props.result.gender}{' '}
              </p>
              <p>
                {' '}
                <span className={styles.more}> Planet: </span> {props.result.location.name}{' '}
              </p>
              <span className={styles.created}> Was created in: {parseInt(props.result.created)}</span>
            </div>
          </div>
        </div>
      );
    }
export default Person;