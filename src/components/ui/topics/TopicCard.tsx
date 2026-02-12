import Card from "../ui/Card";
import type { Topic } from "../types/topic";

type Props = {
  topic: Topic;
};

function TopicCard({ topic }: Props) {
  return (
    <Card>
      <h3 style={{ margin: "0 0 6px" }}>{topic.title}</h3>
      <p style={{ margin: 0, color: "#555" }}>
        {topic.subject} • {topic.status}
      </p>
    </Card>
  );
}

export default TopicCard;
