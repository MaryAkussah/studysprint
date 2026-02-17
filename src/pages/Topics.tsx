import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import AddTopicForm from "../components/forms/AddTopicForm";
import TopicCard from "../components/topics/TopicCard";
import type { Topic } from "../types/topic";

const sampleTopics: Topic[] = [
  { id: "t1", title: "Fractions & Decimals", subject: "Math", status: "Not Started" },
  { id: "t2", title: "Parts of Speech", subject: "English", status: "In Progress" },
  { id: "t3", title: "Basic Electricity", subject: "Science", status: "Completed" },
];

function Topics() {
  const [topics, setTopics] = useState<Topic[]>(sampleTopics);

  function handleCreate(topic: Topic) {
    setTopics((prev) => [topic, ...prev]);
  }

  return (
    <div>
      <PageHeader
        title="Topics"
        subtitle="Add topics and see them appear instantly (Week 2 adds persistence)."
      />

      <div style={{ display: "grid", gap: 12 }}>
        <AddTopicForm onCreate={handleCreate} />

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
