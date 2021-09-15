import SearchBar from '../components/Search';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
  return (
    <>
      <SearchBar />
      <Link to="/documents" className="btn-primary">
        View your documents
      </Link>
    </>
  );
};

export default Search;
