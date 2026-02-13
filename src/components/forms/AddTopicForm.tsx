import { useState } from "react";
import Card from "../ui/Card";
import type { Topic } from "../../types/topic";

type Props = {
  onCreate?: (topic: Topic) => void; // optional for now (Week 2 will use it)
};

function AddTopicForm({ onCreate }: Props) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState<Topic["subject"]>("Math");
  const [status, setStatus] = useState<Topic["status"]>("Not Started");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setError("");

    const newTopic: Topic = {
      id: crypto.randomUUID(),
      title: title.trim(),
      subject,
      status,
    };

    // For now: show proof it works
    console.log("Created topic:", newTopic);

    // Later in Week 2: parent will save it
    onCreate?.(newTopic);

    setTitle("");
    setSubject("Math");
    setStatus("Not Started");
  }

  return (
    <Card>
      <h3 style={{ marginTop: 0 }}>Add Topic</h3>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <label>Title</label>
          <input
            placeholder="e.g. Fractions & Decimals"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label>Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value as Topic["subject"])}
          >
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Science">Science</option>
            <option value="Social Studies">Social Studies</option>
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Topic["status"])}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button type="submit">Create Topic</button>

        {error && <p style={{ margin: 0, color: "crimson" }}>{error}</p>}
      </form>
    </Card>
  );
}

export default AddTopicForm;
