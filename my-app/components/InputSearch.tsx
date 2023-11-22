import styles from '@/styles/InputSearch.module.css'

const InputSearch = () => {   
    return (
      <form onSubmit={()=>{}}>
        <div className={styles.inputwrapper}>
          <input type="text" name="name" placeholder="write here a name" onChange={()=>{console.log('skd')}} className={styles.input}/>
          <button type="submit" className={styles.buttonsearch}>
            {' '}
            Search 🔎{' '}
          </button>
          <button type="submit" onClick={()=>{}} className={styles.buttonsearch}>
            {' '}
            Reset 👌{' '}
          </button>
          </div>
      </form>
    );
  };
  
  export default InputSearch;