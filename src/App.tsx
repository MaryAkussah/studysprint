import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./app/AppLayout";
import Dashboard from "./pages/Dashboard";
import Topics from "./pages/Topics";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="topics" element={<Topics />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="progress" element={<Progress />} />
        <Route path="settings" element={<Settings />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
