import ErrorButton from '../ErrorBoundary/ErrorButton';
import InputSearch from '../input-search/InputSearch';

const Header = () => {
  return (
    <header>
      <ErrorButton />
      <InputSearch />
    </header>
  );
};

export default Header;
