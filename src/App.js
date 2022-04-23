import "./App.css";
import HotTopic from "./components/hot-topic";
import Navbar from "./components/navbar";
import TodayNew from "./components/today-new";

function App() {
  return (
    <div>
      <Navbar/>
      <TodayNew/>
      {/* Your component Julio here */}
      <HotTopic/>
    </div>
  
  );
}

export default App;
