import { Footer } from "./components/footer";
import "./App.css";
import { useEffect } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/header";
import { FirstPage } from "./components/firstPage";
import { ThridPage } from "./components/thirdPage";
import { SecondPage } from "./components/secondPage";
const tele = window.Telegram.WebApp;
export const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/thirdPage" element={<ThridPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Navigate to="/firstPage" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
