import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Item } from '../../types';
import classes from './Person.module.css';
import Loader from '../loader/Loader';

const Person = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState<Item | null>(null);
  const navigate = useNavigate();
  const clickclose = () => {
    navigate(-1);
    localStorage.setItem('active', '');
  };
  const obj = {
    isLoaded: false,
    item: person,
  };
  const [statePerson, setStatePerson] = useState(obj);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${personId}`)
      .then((res) => res.json())
      .then((result) => {
        setPerson(result);
        setStatePerson({
          isLoaded: true,
          item: result,
        });
      });
  }, [personId]);
  console.log(statePerson);
  if (statePerson) {
    const isLoaded = statePerson.isLoaded;
    if (!isLoaded) {
      return <Loader />;
    } else if (person && person.location && person.created) {
      return (
        <>
          <div className={classes.headerItem}>
            <h1 className={classes.personName}> {person.name} </h1>
            <p className={classes.id}>
              {' '}
              IDENTIFICATION-NUMBER: <span> {person.id} </span>{' '}
            </p>
            <button className={classes.button} onClick={clickclose}>
              {' '}
              x{' '}
            </button>
          </div>
          <div className={classes.container}>
            <div>
              <img src={person.image}></img>
            </div>
            <div className={classes.details}>
              <p>
                {' '}
                <span className={classes.more}> Species: </span> {person.species}{' '}
              </p>
              <p>
                {' '}
                <span className={classes.more}> Status: </span> {person.status}{' '}
              </p>
              <p>
                {' '}
                <span className={classes.more}> Gender: </span> {person.gender}{' '}
              </p>
              <p>
                {' '}
                <span className={classes.more}> Planet: </span> {person.location.name}{' '}
              </p>
              <span className={classes.created}> Was created in: {parseInt(person.created)}</span>
            </div>
          </div>
        </>
      );
    }
  }
};
export default Person;
