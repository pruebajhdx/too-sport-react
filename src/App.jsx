import "./App.css";
import Footer from "./components/home/Footer";
import HotTopic from "./components/home/HotTopic";
import Navbar from "./components/home/Navbar";
import TodayNew from "./components/home/TodayNew";

function App() {
  return (
    <div>
      <Navbar/>
      <TodayNew/>
      {/* Your component Julio here */}
      <HotTopic/>
      <Footer/>
    </div>
  
  );
}

export default App;
