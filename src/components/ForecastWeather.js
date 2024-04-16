import React from "react";
import { Card, CardContent, Typography, Grid, styled } from "@mui/material";

const ForecastCard = styled(Card)({
	maxWidth: 150,
	margin: "auto",
	marginTop: 20,
	padding: 15,
	borderRadius: 10,
	boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
	backgroundColor: "#f0f0f0",
	textAlign: "center",
});

const ForecastCardContent = styled(CardContent)({
	padding: "10px 0",
});

const ForecastHour = styled(Typography)({
	fontWeight: "bold",
});

const ForecastTemperature = styled(Typography)({
	marginTop: 5,
});

const ForecastHumidity = styled(Typography)({
	marginTop: 5,
	color: "#666",
});

const WeatherIcon = styled("img")({
	width: 50,
	height: 50,
	marginBottom: 10,
});

function extractTime(text) {
	const timePattern = /\b\d{2}:\d{2}\b/g;
	const extractedTime = text.match(timePattern);
	return extractedTime ? extractedTime[0] : "-";
}

const HourlyForecast = ({ forecasts }) => {
	return (
		<>
			<h3 style={{ marginLeft: 20 }}> Hourly forecast</h3>
			<Grid style={{ padding: 20 }} container spacing={2}>
				{forecasts.map((forecast, index) => (
					<Grid item xs={6} sm={2} key={index}>
						<ForecastCard>
							<ForecastCardContent>
								<WeatherIcon
									src={`https:${forecast.condition.icon}`}
									alt="Weather Icon"
								/>
								<ForecastHour>{extractTime(forecast.time)}</ForecastHour>
								<ForecastTemperature variant="body1">
									{forecast.feelslike_c}°C
								</ForecastTemperature>
								<ForecastHumidity variant="body2">
									Humidity: {forecast.humidity}%
								</ForecastHumidity>
								<ForecastHumidity variant="body2">
									Wind Speed: {forecast.wind_mph} mph
								</ForecastHumidity>
							</ForecastCardContent>
						</ForecastCard>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default HourlyForecast;
