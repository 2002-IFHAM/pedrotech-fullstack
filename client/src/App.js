import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/createpost">CreteA Post</Link>
            </li>
            <li>
              <Link to="/">Home Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
