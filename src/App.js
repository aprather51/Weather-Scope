import React, { Component } from 'react';
import './main.scss';

//components
import Form from './components/Form';
import Weather from './components/Weather';

//img
import imgLogo from './img/weather_scope.png';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
	state = {
		city: '',
		state: '',
		country: '',
		temp: '',
		humidity: '',
		wind: '',
		description: '',
		error: ''
	};

	//fetch weather
	fetchWeather = async e => {
		e.preventDefault();

		//input value
		const city = e.target.elements.city.value;
		const state = e.target.elements.state.value;
		const country = e.target.elements.country.value;

		//data fetch
		const api_fetch = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
		);

		const data = await api_fetch.json();

		//console.log(state);

		if (city && state && country) {
			this.setState({
				city: data.name,
				state: state,
				country: data.sys.country,
				temp: data.main.temp,
				humidity: data.main.humidity,
				wind: data.wind.speed,
				description: data.weather[0].description,
				error: data.message
			});
		} else {
			this.setState({
				city: undefined,
				state: '',
				country: undefined,
				temp: undefined,
				humidity: undefined,
				wind: undefined,
				description: undefined,
				error: 'Please Enter Input Value'
			});
		}
	};

	render() {
		const status = this.state.city || this.state.state || this.country;
		const error = this.state.error;
		const weather = (
			<Weather
				city={this.state.city}
				state={this.state.state}
				country={this.state.country}
				temp={this.state.temp}
				humidity={this.state.humidity}
				wind={this.state.wind}
				description={this.state.description}
				error={this.state.error}
			/>
		);
		const logo = (
			<div className="img-wrap">
				<img src={imgLogo} alt="logo" />
			</div>
		);

		const forecast = status || error ? weather : logo;

		return (
			<div className="wrapper">
				<div className="content">
					<div className="left">{forecast}</div>
					<div className="right">
						<div className="title">
							<p>Find accurate information about local conditions...</p>
						</div>
						<Form fetchWeather={this.fetchWeather} reset={this.handleReset} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
