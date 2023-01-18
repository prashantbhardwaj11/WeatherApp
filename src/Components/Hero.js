import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherWidget from './WeatherWidget';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingBar from 'react-top-loading-bar';

export default function Hero() {
	// Use states
	const apiKey = '8e51bb8a1eb99116e29d35a4229f429d';
	const [inputCity, setInputCity] = useState('');
	const [data, setData] = useState({});
	// Seeting progress loading bar's initial value to 0
	const [progress, setProgress] = useState(0);
	const mydate = new Date().toDateString();
	const [time, setTime] = useState(new Date());

	const getWeatherData = (cityName) => {
		if (!cityName) return;
		const apiUrl =
			'https://api.openweathermap.org/data/2.5/weather?q=' +
			cityName +
			'&appid=' +
			apiKey;

		axios
			// Seeting progress loading bar's initial value to 20

			.get(apiUrl, setProgress(progress + 20))

			.then((res) => {
				console.log('response', res.data);
				setData(res.data);

				// Seeting progress loading bar's initial value to 100
				setProgress(progress + 100);
			})
			.catch((err) => {
				// handling Error by console logging it
				console.log('err', err);
			});

		// Seeting progress loading bar's initial value to 70
		setProgress(progress + 70);
	};
	const handleChangeInput = (e) => {
		setInputCity(e.target.value);
	};

	const handleSearch = () => {
		getWeatherData(inputCity);

		// Empty Input bar after hitting search
		setInputCity('');
	};
	useEffect(() => {
		// change time every second
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		// Setting default location == bangalore
		getWeatherData('Bangalore');
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<Navbar
				handleSearch={handleSearch}
				inputCity={inputCity}
				handleChangeInput={handleChangeInput}
			/>

			<LoadingBar
				color="#FACC15"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>

			<WeatherWidget
				visibility={data?.visibility}
				humidity={data?.main?.humidity}
				max={(data?.main?.temp_max - 273.15).toFixed(1)}
				min={(data?.main?.temp_min - 273.15).toFixed(1)}
				temp={(data?.main?.temp - 273.15).toFixed(1)}
				name={data?.name}
				mydate={mydate}
				mytime={time.toLocaleTimeString()}
			/>

			<Footer />
		</>
	);
}
