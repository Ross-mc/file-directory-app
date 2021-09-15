import { Link } from 'react-router-dom';

const MainContainer: React.FC = ({ children }) => {
  return (
    <main className="main-container">
      {children}
      <div>
        View your <Link to="/documents">documents</Link>
      </div>
      <div>
        Search your <Link to="/search">documents</Link>
      </div>
    </main>
  );
};

export default MainContainer;
