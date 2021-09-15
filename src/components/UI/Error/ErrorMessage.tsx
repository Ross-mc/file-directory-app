import classes from './error.module.scss';

interface ErrorProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div data-testid="error-message" className={classes.error}>
      {message}
    </div>
  );
};

export default ErrorMessage;
