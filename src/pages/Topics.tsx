import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";

function Topics() {
  return (
    <div>
      <PageHeader
        title="Topics"
        subtitle="This will become your topics tracker (CRUD) in Week 2."
      />

      <Card>
        <p style={{ margin: 0 }}>
          No topics yet. Tomorrow we’ll add the Topic List + Add Topic form.
        </p>
      </Card>
    </div>
  );
}

export default Topics;
