import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to your Document Store</h1>
      <p>
        View your <Link to="/documents">documents</Link>
      </p>
    </div>
  );
};

export default Home;
