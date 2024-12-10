import { useEffect, useState, useRef } from "react";
import Search from "../search/search";
import axios from "axios";
import gsap from "gsap";

export function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const searchBarRef = useRef(null); 
    const weatherInfoRef = useRef(null); 

    async function fetchWeather(city) {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b54f0122df21cdae0252fc1524d39e2`
            );
            const dat = res.data;
            setData(dat);
        } catch (error) {
            setError("City not found or API error occurred.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchWeather("Hyderabad");
        gsap.fromTo(searchBarRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 });
    }, []);

    useEffect(() => {
        if (data) {
            gsap.fromTo(
                weatherInfoRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5 }
            );
        }
    }, [data]);

    function handleSearch() {
        if (search.trim()) {
            fetchWeather(search);
        } else {
            setError("Please enter a valid city name.");
        }
    }

    return (
        <div className="main">
           
            <div ref={searchBarRef}>
                <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
            </div>
            {loading ? (
                <div className="loading">
                    <div className="spinner"></div>
                </div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : data ? (
                <div ref={weatherInfoRef}>
                    <div className="city">
                        <h2>
                            {data.name}, <span>{data.sys.country}</span>
                        </h2>
                    </div>
                    <div className="weather-details">
                        <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
                        <p>Weather: {data.weather[0].description}</p>
                        <p>Humidity: {data.main.humidity}%</p>
                        <p>Wind Speed: {data.wind.speed} m/s</p>
                        <p>Feels Like: {Math.round(data.main.feels_like - 273.15)}°C</p>

                    </div>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}
