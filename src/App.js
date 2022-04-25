import "./App.css";
import Navbar from "./components/navbar";
import TodayNew from "./components/today-new";
import Authors from "./components/home/Authors";

function App() {
  return (
    <div>
      <Navbar/>
      <TodayNew/>
      <Authors/>
      
    </div>
  
  );
}

export default App;