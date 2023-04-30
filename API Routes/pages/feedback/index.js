import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage({ feedbackItems }) {
  return (
    <ul>
      {feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

// We should use fetch inside getStaticProps or getServerSideProps for fetching our own api... instead we should use our existing api to reuse and display data. SInce all api are running on the same server.

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
