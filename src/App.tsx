import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicationsPage } from "./publication";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>home page</h1>}></Route>
        <Route path="/publication" element={<PublicationsPage />} />
      </Routes>
    </Router>
  );
}
