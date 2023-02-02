import css from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <button className={css.Button} type="button" onClick={onClick}>
      Load Moar
    </button>
  );
};
export default Button;
