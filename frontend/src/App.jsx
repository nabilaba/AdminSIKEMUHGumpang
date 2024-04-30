import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./templates/Root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<div>Login</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
