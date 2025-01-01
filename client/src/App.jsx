import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Login from "./components/Login";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                <Route index element={<Content />} />
                <Route path="/" element={<Content />} />
                <Route path="/dashboard" element={<Content />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
