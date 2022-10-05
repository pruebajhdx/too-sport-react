import "./App.css";
import Navbar from "./components/home/Navbar";
import TodayNew from "./components/home/TodayNew";
import Authors from "./components/home/Authors";
import HotTopic from "./components/home/HotTopic";
import React, { useEffect, useState } from "react";
import AdblockDectect from "./components/home/Adblock";

const adBlock = async (setAdblock) => {
  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    setAdblock(adBlockEnabled);
  }
}

function App() {
  const [detectAdblock, setAdblock] = useState(false);

  useEffect(() => {
    adBlock(setAdblock)
  }, [])

  if (detectAdblock) {
    return (
      <div>
        <AdblockDectect />
      </div>
    )
  } else {
    return (
      <div>
        <Navbar />
        <TodayNew />
        <Authors />
        <HotTopic />
      </div>

    );
  }

}

export default App;