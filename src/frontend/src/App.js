import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
        <Route path = "/teams/:teamName" element={<TeamPage />}></Route>
        <Route path = "/teams/:teamName/matches/:year" element={<MatchPage />}></Route>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
