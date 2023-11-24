import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import InputSearch from '@/components/InputSearch';
import ErrorButton from '@/components/ErrorButton';
import { InferGetServerSidePropsType } from 'next';
import ListItems from '@/components/ListItems';
import { fetchAllItems, getRunningQueriesThunk } from '@/store/reducers/ItemsService';
import { wrapper } from '@/store/store';
import { Data, Item } from '@/types/types';
import { useAppDispatch } from '@/store/hooks/redux';
import { itemSlice } from '@/store/reducers/ItemsSlice';

const { personItemsReduser } = itemSlice.actions;
// ctx: GetServerSidePropsContext

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { name } = context.query;
  const data = await store.dispatch(fetchAllItems.initiate(name as string));
  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  return {
    props: {
      items: data.data || null,
    },
  };
});

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps> | unknown
) {
  const itemsProps = props.items as Data;
  console.log(itemsProps);
  const dispatch = useAppDispatch();
  if (itemsProps) {
    dispatch(personItemsReduser(itemsProps.data as Item[]));
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Rick & Morty</title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://www.svgrepo.com/show/1321/planet.svg"
          />
        </Head>
        <main className={styles.main}>
          <div>
            <ErrorButton />
          </div>
          <div className={styles.center}>
            <div>
              <InputSearch />
            </div>
          </div>
          <div className={styles.grid}>
            <ListItems items={itemsProps.data} />
          </div>
        </main>
      </>
    );
  } else {
    return (
      <main className={styles.main}>
        <div>
          <ErrorButton />
        </div>
        <div className={styles.center}>
          <div>
            <InputSearch />
          </div>
        </div>
        <div className={`${styles.grid} ${styles.notfound}`}>no such person</div>
      </main>
    );
  }
}
