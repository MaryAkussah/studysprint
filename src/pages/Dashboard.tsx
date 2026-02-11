import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";

function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Track your topics and quiz progress daily."
      />

      <Card>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Today’s Target: 1 topic + 10 quiz questions</li>
          <li>Streak: Coming soon</li>
          <li>Progress: Coming soon</li>
        </ul>
      </Card>
    </div>
  );
}

export default Dashboard;
