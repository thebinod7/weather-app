export const GEO_API_OPTIONS = {
	method: "GET",
	url: `${process.env.REACT_APP_GEO_API_URL}/cities`,
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
	},
};

export const MIN_POPULATION = 1000000;
