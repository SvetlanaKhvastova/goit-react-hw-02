import css from "./Feedback.module.css";

const Feedback = ({ reviews, totalFeedback, positiveFeedbackPercentage }) => {
  const reviewsValue = Object.entries(reviews);

  return (
    <>
      <div className={css.feedback}>
        <ul>
          {reviewsValue.map(([key, value]) => {
            return (
              <li key={key}>
                <p>
                  <span className={css.key}>{key}:</span> <span className={css.value}>{value}</span>
                </p>
              </li>
            );
          })}
          <li>
            <span className={css.key}>Total:</span> <span className={css.value}>{totalFeedback}</span>
          </li>
          <li>
            <span className={css.key}>Positive:</span> <span className={css.value}>{positiveFeedbackPercentage}%</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Feedback;
