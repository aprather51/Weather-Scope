import React from 'react';

const Form = ({ fetchWeather }) => (
	<form id="reset" onSubmit={fetchWeather}>
		<input type="text" name="city" placeholder="City..." />
		<input type="text" name="state" placeholder="State..." />
		<input type="text" name="country" placeholder="Country..." />
		<div className="btn-wrap">
			<button>Get Current Weather</button>
		</div>
	</form>
);
export default Form;
