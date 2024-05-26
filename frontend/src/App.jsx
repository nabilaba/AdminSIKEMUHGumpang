import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./templates/Root";
import Dashboard from "./pages/Dashboard";
import Protected from "./templates/Protected";
import SidebarWithHeader from "./templates/Sidebar";
import ChangeAccount from "./pages/ChangeAccount";
import ListAdmin from "./pages/ListAdmin";
import AddMember from "./pages/AddMember";
import Member from "./pages/Member";
import EditMember from "./pages/EditMember";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
      <Route path="dashboard" element={<SidebarWithHeader />}>
        <Route index element={<Dashboard />} />
        <Route path="member" element={<Member />} />
        <Route path="list-admin" element={<ListAdmin />} />
        <Route path="change-account" element={<ChangeAccount />} />
        <Route path="add-member" element={<AddMember />} />
        <Route path="edit-member/:id" element={<EditMember />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
