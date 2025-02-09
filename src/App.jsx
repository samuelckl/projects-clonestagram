import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import FeedsList from "./app/components/Feeds/FeedsList";
import Profile from "./app/components/Feeds/Profile";
import logo from "./app/components/logo.png";

function App() {
  return (
    <Router>
      {/* Logo act as home button */}
      <div className="bg-black min-h-screen flex flex-col items-center justify-start">
        <Link to={`/`}>
          <img src={logo} alt="Logo" className="w-50 h-auto mt-4" />
        </Link>
        <div>
          <Routes>
            <Route path="/" element={<FeedsList />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;