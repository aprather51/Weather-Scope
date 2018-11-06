import React from 'react';
import NumberFormat from 'react-number-format';

const Weather = props => (
	<div className="info">
		<div className="location">
			{props.city &&
			props.state && (
				<p>
					{props.city}, {props.state}
				</p>
			)}
		</div>
		<div className="temp">
			{props.temp && (
				<h1 className="degree">
					<NumberFormat
						value={props.temp}
						displayType={'text'}
						decimalScale={0}
					/>
					<span className="scale"> &#8457;</span>
				</h1>
			)}
		</div>

		<div className="description">
			{props.description && <p>{props.description}</p>}
		</div>
		<div className="etc">
			<div className="humidity">
				{props.humidity && (
					<p>
						<strong>Humidity:</strong> {props.humidity}%{' '}
					</p>
				)}
			</div>

			<div className="wind">
				{props.humidity && (
					<p>
						<strong>Wind: </strong> {props.humidity} mph
					</p>
				)}
			</div>
		</div>

		<div className="err">{props.error && <p>{props.error} </p>}</div>
	</div>
);

export default Weather;
