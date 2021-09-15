import classes from './error.module.scss';
import { Link } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

interface ErrorProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div data-testid="error-component" className={classes.errorContainer}>
      <ErrorMessage message={message} />
      <Link to="/documents" className="btn-primary">
        Return
      </Link>
    </div>
  );
};

export default ErrorComponent;
