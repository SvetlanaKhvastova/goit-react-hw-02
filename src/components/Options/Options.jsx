import Button from "../Button/Button";
import css from "./Options.module.css";

const Options = ({ reviews, updateFeedback, totalFeedback, resetFeedback }) => {
  const reviewsKey = Object.keys(reviews);
  return (
    <>
      <div className={css.options}>
        {reviewsKey.map((r) => {
          return <Button updateFeedback={() => updateFeedback(r)} key={r} txt={r} />;
        })}
        {totalFeedback > 0 && <Button updateFeedback={resetFeedback} txt="Reset" />}
      </div>
    </>
  );
};

export default Options;
