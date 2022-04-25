import "./App.css";
import Navbar from "./components/navbar";
import TodayNew from "./components/today-new";
import Authors from "./components/authors";

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
