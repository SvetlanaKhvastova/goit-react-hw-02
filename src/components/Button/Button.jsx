import css from "./Button.module.css";
const Button = ({ updateFeedback, txt }) => {
  return (
    <>
      <button className={css.button} onClick={updateFeedback}>
        {txt}
      </button>
    </>
  );
};

export default Button;
