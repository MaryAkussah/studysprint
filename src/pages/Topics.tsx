import PageHeader from "../components/ui/PageHeader";
import TopicCard from "../components/ui/topics/TopicCard";
import type { Topic } from "../types/topic";
import AddTopicForm from "../components/forms/AddTopicForm";


const sampleTopics: Topic[] = [
  {
    id: "t1",
    title: "Fractions & Decimals",
    subject: "Math",
    status: "Not Started",
  },
  {
    id: "t2",
    title: "Parts of Speech",
    subject: "English",
    status: "In Progress",
  },
  {
    id: "t3",
    title: "Basic Electricity",
    subject: "Science",
    status: "Completed",
  },
];

function Topics() {
  const topics = sampleTopics; // later this becomes state + localStorage

  return (
  <div>
    <PageHeader
      title="Topics"
      subtitle="Your study topics (Week 2 will add CRUD + persistence)."
    />

    <div style={{ display: "grid", gap: 12 }}>
      <AddTopicForm />

      {topics.length === 0 ? (
        <p style={{ color: "#555" }}>No topics yet. Add your first topic.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  </div>
);

}

export default Topics;
