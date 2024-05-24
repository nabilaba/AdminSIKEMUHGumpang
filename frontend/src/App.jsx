import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./templates/Root";
import Dashboard from "./pages/Dashboard";
import Protected from "./templates/Protected";
import SidebarWithHeader from "./templates/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
      <Route path="dashboard" element={<SidebarWithHeader />}>
        <Route
          index
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
