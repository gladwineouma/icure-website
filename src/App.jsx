import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<div>Donate Page Coming Soon!</div>} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
