interface ErrorProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
