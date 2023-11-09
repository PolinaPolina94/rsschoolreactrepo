import { useState } from 'react';
import ErrorButton from '../ErrorBoundary/ErrorButton';
import InputSearch from '../input-search/InputSearch';
import { InputValue } from '../../types';
import { InputContext } from '../Context/InputContext';

const Header = () => {
  const [state, setValue] = useState<InputValue | null>(null);

  return (
    <header>
      <ErrorButton />
      <InputContext.Provider value={{ state, setValue }}>
        <InputSearch />
      </InputContext.Provider>
    </header>
  );
};

export default Header;
