import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/routes/search/Search";
import SomethingWrong from "./components/home/404";
import Player from "./components/player/player";
import Ligues from "./components/routes/football/Ligues";
import Matches from "./components/routes/football/Matches";
import Channels from "./components/routes/channels/Channels";
import Baseball from "./components/routes/baseball/baseball";
import F1 from "./components/routes/f1/F1";
import Boxing from "./components/routes/boxing/boxing";
import Motors from "./components/routes/motorsport/Motors";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/search" element={<Search />} />
                <Route path="/player" element={<Player />} />
                <Route path="/football/leagues" element={<Ligues />} />
                <Route path="/football/leagues/:league" element={<Matches />} />
                <Route path="/channels" element={<Channels />} />
                <Route path="/mlb" element={<Baseball />} />
                <Route path="/f1" element={<F1 />} />
                <Route path="/boxing" element={<Boxing/>}/>
                <Route path="/motors" element={<Motors/>}/>
                <Route path="*" element={<SomethingWrong />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
