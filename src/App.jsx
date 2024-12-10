import { useContext, useEffect } from "react";
import "./App.css";
import { Weather } from "./components/weather/weather";
import { ThemeContext } from "./components/Provider/Theme";
import { Navbar } from "./Navbar";
import bgvid from './assets/weather-light-large.mp4'


function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <video className="bg-video" autoPlay loop muted>
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar/>
      <Weather />
    </div>
  );
}

export default App;
