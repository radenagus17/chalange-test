import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, AuthRoute } from "./auth";
import SidebarMenu from "./components/layouts/Sidebar";
import TestPage from "./pages/TestPage";
import Login from "./pages/LoginPage";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
import Register from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="" element={<SidebarMenu />}>
          <Route path="/test" element={<TestPage />} />
          <Route path="/test1" element={<TestPage2 />} />
          <Route path="/test2" element={<TestPage3 />} />
        </Route>
      </Route>
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
