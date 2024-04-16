import { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import HourlyForecast from "./components/ForecastWeather";
import Loader from "./components/Loader";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = process.env.REACT_APP_WEATHER_API_URL;

function App() {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecastWeather, setForecastWeather] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchAndSetWeatherData = (lat, lng) => {
		const currentFetch = fetch(
			`${API_URL}/current.json?q=${lat},${lng}&key=${API_KEY}`
		);
		const forecastFetch = fetch(
			`${API_URL}/forecast.json?q=${lat},${lng}&days=1&key=${API_KEY}`
		);
		Promise.all([currentFetch, forecastFetch]).then(async (response) => {
			setLoading(true);
			const current = await response[0].json();
			const data = await response[1].json();
			const hourlyForecast = data?.forecast?.forecastday[0].hour;
			setCurrentWeather(current);
			setForecastWeather(hourlyForecast);
			setLoading(false);
		});
	};

	const onSearchChange = (d) => {
		const [lat, lng] = d.value.split(" ");
		return fetchAndSetWeatherData(lat, lng);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			return fetchAndSetWeatherData(latitude, longitude);
		});
	}, []);

	return (
		<div className="app-container">
			<Search onSearchChange={onSearchChange} />
			{loading ? (
				<Loader />
			) : (
				<>
					{currentWeather && <CurrentWeather currentWeather={currentWeather} />}
					{forecastWeather.length > 0 && (
						<HourlyForecast forecasts={forecastWeather} />
					)}
				</>
			)}
		</div>
	);
}

export default App;
