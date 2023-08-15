import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import DemoSpace from "../components/demospace/DemoSpace";
import MainHub from "./MainHub";

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainHub render={<Dashboard />} errors={["URL does not exist"]} />} />
        <Route path="/" element={<MainHub render={<Dashboard />} />} />
        <Route path="/demo/:title" element={<MainHub render={<DemoSpace />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
