import styles from '@/styles/Home.module.css';
import InputSearch from '@/components/InputSearch';
import ErrorButton from '@/components/ErrorButton';
import { InferGetServerSidePropsType } from 'next';
import ListItems from '@/components/ListItems';
import { fetchAllItems, getRunningQueriesThunk } from '@/store/reducers/ItemsService';
import { wrapper } from '@/store/store';
import { Data, Item } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux';
import { itemSlice } from '@/store/reducers/ItemsSlice';
import { useEffect } from 'react';
import SelectorButton from '@/components/SelectorButton';
import Pagination from '@/components/Pagination';
import Layout from './Layout';
import { useRouter } from 'next/router';
import Person from '@/components/Person';
import Loader from '@/components/Loader';

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { page, name } = context.query;
  let data;
  if (page && name) {
    data = await store.dispatch(fetchAllItems.initiate({ page: Number(page), name: String(name) }));
  } else if (!page && name) {
    data = await store.dispatch(fetchAllItems.initiate({ page: Number('1'), name: String(name) }));
  } else if (page && !name) {
    data = await store.dispatch(fetchAllItems.initiate({ page: Number(page), name: String(' ') }));
  } else if (!page && !name) {
    data = await store.dispatch(fetchAllItems.initiate({ page: Number('1'), name: String('') }));
  }
  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  return {
    props: {
      items: data?.data || null,
    },
  };
});

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const itemsProps = props.items as Data;
  const dispatch = useAppDispatch();
  const { personItemsReduser } = itemSlice.actions;
  const router = useRouter();
  const { personNameReduser } = itemSlice.actions;
  useEffect(() => {
    if (!itemsProps) {
      dispatch(personItemsReduser([]));
      dispatch(personNameReduser(''));
    }
    if (itemsProps) {
      dispatch(personItemsReduser(itemsProps.data as Item[]));
    }
  });
  const itemsCount = useAppSelector((state) => state.itemReducer.countItems);
  let itemsLength;
  if (itemsProps) {
    itemsLength = [...itemsProps.data];
    itemsLength.length = itemsCount;
  }
  console.log(router.isFallback);
  return (
    <>
      <Layout />
      <main className={styles.main}>
        <ErrorButton />
        <div className={styles.center}>
          <InputSearch />
        </div>
        <SelectorButton />
        <Pagination />
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            {router.isFallback && (
              <div>
                {' '}
                <Loader />
              </div>
            )}
            {itemsLength && <ListItems items={itemsLength} />}
            {!itemsProps && <div className={styles.notfound}> no such name </div>}
          </div>
          <div className={styles.active}>
            {router.query.details && <Person items={itemsLength} />}
          </div>
        </div>
      </main>
    </>
  );
}
