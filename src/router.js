import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/routes/search/Search";
import SomethingWrong from "./components/home/404";
import Player from "./components/player/player";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/search" element={<Search />} />
            <Route path="/player" element={<Player />} />
            <Route path="*" element={<SomethingWrong />} />
        </Routes>
        </BrowserRouter>
    );
};

export default Router;
