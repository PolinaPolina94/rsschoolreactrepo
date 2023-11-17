import ErrorButton from '../ErrorBoundary/ErrorButton';
import InputSearch from '../input-search/InputSearch';
import { Paginator } from '../Pagination/Pagination';
import SelectorBtn from '../SelectorBtn/SelectorBtn';

const Header = () => {
  return (
    <header>
      <ErrorButton />
      <InputSearch />
      <Paginator />
      <SelectorBtn />
    </header>
  );
};

export default Header;
