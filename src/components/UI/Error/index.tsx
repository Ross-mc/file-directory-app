interface ErrorProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return <div data-testid="error-component">{message}</div>;
};

export default ErrorMessage;
