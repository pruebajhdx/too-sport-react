import "./App.css";
import Navbar from "./components/home/Navbar";
import TodayNew from "./components/home/TodayNew";
import Authors from "./components/home/Authors";
import HotTopic from "./components/home/HotTopic";


function App() {
  return (
    <div>
      <Navbar/>
      <TodayNew/>
      <Authors/>
      <HotTopic/>
    </div>
  
  );
}

export default App;