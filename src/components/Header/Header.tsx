import { useState } from 'react';
import ErrorButton from '../ErrorBoundary/ErrorButton';
import InputSearch from '../input-search/InputSearch';
import { InputValue } from '../../types';
import { InputContext } from '../Context/InputContext';
import { Paginator } from '../Pagination/Pagination';
import SelectorBtn from '../SelectorBtn/SelectorBtn';

const Header = () => {
  const [state, setValue] = useState<InputValue | null>(null);

  return (
    <header>
      <ErrorButton />
      <InputContext.Provider value={{ state, setValue }}>
        <InputSearch />
      </InputContext.Provider>
      <Paginator />
      <SelectorBtn />
    </header>
  );
};

export default Header;
