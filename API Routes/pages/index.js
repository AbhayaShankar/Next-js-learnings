import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    console.log(enteredEmail, enteredFeedback);
    fetch(); // {email : "test@test.com" , text : "Feedback..."}
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Submit your Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
