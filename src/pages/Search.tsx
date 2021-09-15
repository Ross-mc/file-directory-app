import SearchBar from '../components/Search';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
  return (
    <>
      <SearchBar />
      <Link
        to="/documents"
        className="btn-primary"
        style={{ margin: '0 auto' }}
      >
        Return to directory
      </Link>
    </>
  );
};

export default Search;
