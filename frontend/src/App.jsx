import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./templates/Root";
import Dashboard from "./pages/Dashboard";
import Protected from "./templates/Protected";
import SidebarWithHeader from "./templates/Sidebar";
import ChangeAccount from "./pages/ChangeAccount";
import ListAdmin from "./pages/ListAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
      <Route path="dashboard" element={<SidebarWithHeader />}>
        <Route index element={<Dashboard />} />
        <Route path="list-admin" element={<ListAdmin />} />
        <Route path="change-account" element={<ChangeAccount />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
