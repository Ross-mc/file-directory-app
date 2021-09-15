import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to your Document Store</h1>
      <Link to="/documents" className="btn-primary">
        View your documents
      </Link>
      <Link to="/search" className="btn-primary">
        Search for documents
      </Link>
    </div>
  );
};

export default Home;
