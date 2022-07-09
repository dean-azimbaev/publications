import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicationsPage } from "./publication";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicationsPage />}></Route>
      </Routes>
    </Router>
  );
}
