import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedClicks = localStorage.getItem("saved-clicks");
    return savedClicks
      ? JSON.parse(savedClicks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  let totalFeedback = Object.values(reviews).reduce((a, b) => a + b, 0);
  let positiveFeedbackPercentage = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options reviews={reviews} updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? <Feedback reviews={reviews} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} /> : <Notification message="No feedback yet" />}
    </>
  );
}

export default App;
