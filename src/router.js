import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/routes/search/Search";
import SomethingWrong from "./components/home/404";
import Player from "./components/player/player";
import Ligues from "./components/routes/football/Ligues";
import Matches from "./components/routes/football/Matches";
import Channels from "./components/routes/channels/Channels";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/search" element={<Search />} />
            <Route path="/player" element={<Player />} />
            <Route path="/football/leagues" element={<Ligues />} />
            <Route path="/football/leagues/:league" element={<Matches/>} />
            <Route path="/channels" element={<Channels />} />
            <Route path="*" element={<SomethingWrong />} />
        </Routes>
        </BrowserRouter>
    );
};

export default Router;
