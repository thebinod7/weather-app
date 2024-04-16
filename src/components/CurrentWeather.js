import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material";

const WeatherCardWrapper = styled(Card)({
	maxWidth: 300,
	margin: "auto",
	marginTop: 20,
	padding: 15,
	borderRadius: 10,
	boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
	backgroundColor: "#fff",
	textAlign: "center",
});

const WeatherIcon = styled("img")({
	width: 50,
	height: 50,
	marginBottom: 10,
});

const CurrentWeather = ({ currentWeather }) => {
	const { current } = currentWeather;
	return (
		<WeatherCardWrapper>
			<CardContent>
				<Typography variant="h5" component="h2">
					{currentWeather?.location?.name}
				</Typography>
				<WeatherIcon
					src={`https:${current?.condition?.icon}`}
					alt="Weather Icon"
				/>

				<Typography variant="h5" component="h2">
					{current?.feelslike_c}°C
				</Typography>

				<Typography variant="body1" color="textSecondary">
					Humidity: {current?.humidity}%
				</Typography>

				<Typography variant="body1" color="textSecondary">
					Wind Speed: {current?.wind_mph} mph
				</Typography>
			</CardContent>
		</WeatherCardWrapper>
	);
};

export default CurrentWeather;
