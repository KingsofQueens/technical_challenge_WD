import { Routes, Route } from "react-router-dom";
import PhoneListPage from "./pages/PhoneListPage";
import PhonePage from "./pages/PhonePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneListPage />} />
        <Route path="/phones/:id" element={<PhonePage />} />
      </Routes>
    </div>
  );
}

export default App;
