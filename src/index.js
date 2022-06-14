import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionPatents from "./routes/patents";
import SectionEntries from "./routes/entries";

document.title = "Demo"
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/patents" element={<SectionPatents />} />
      <Route path="/entries" element={<SectionEntries />} />
    </Routes>
  </Router>
);