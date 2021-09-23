import './button.styles.scss';

const Button = ({ children, inverted, ...otherProps}) => (
  <button
    // className="custom-button"
    className={`${inverted ? 'inverted' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
