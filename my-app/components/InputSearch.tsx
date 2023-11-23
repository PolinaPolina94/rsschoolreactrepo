import styles from '@/styles/InputSearch.module.css'

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('elements are here')
}

const InputSearch = () => {   
    return (
      <form onSubmit={handleFormSubmit}>
        <div className={styles.inputwrapper}>
          <input type="text" name="name" placeholder="write here a name" onChange={()=>{console.log('skd')}} className={styles.input} />
          <button type="submit" className={styles.buttonsearch}>
            {' '}
            Search 🔎{' '}
          </button>
          {/* <button type="submit" onClick={showElement} className={styles.buttonsearch}>
            {' '}
            Reset 👌{' '}
          </button> */}
          </div>
      </form>
    );
  };
  
  export default InputSearch;