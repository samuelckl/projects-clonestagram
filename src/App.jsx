import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import FeedsList from "./app/components/Feeds/FeedsList";
import Profile from "./app/components/Feeds/Profile";
import About from "./app/components/About"; // Import the About page
import Header from "./app/components/components/Header";
import Footer from "./app/components/components/Footer";

import Tab from "./app/components/components/Tab";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center bg-black">
        <div className="flex flex-col bg-black">
          <Header/>
          <div className="flex flex-row flex-grow w-full ">
            <Tab />
            <div className="flex p-6 text-white justify-start">
              <Routes>
                <Route path="/" element={<FeedsList />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;