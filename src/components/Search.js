import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { GEO_API_OPTIONS, MIN_POPULATION } from "../constants";
const API_ENDPOINT = process.env.REACT_APP_GEO_API_URL;

export default function Search({ onSearchChange }) {
	const [searchData, setSearchData] = useState("");

	const loadOptions = (inputValue) => {
		return fetch(
			`${API_ENDPOINT}/cities?minPopulation=${MIN_POPULATION}&namePrefix=${inputValue}`,
			GEO_API_OPTIONS
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			});
	};

	const handleSearchChange = (d) => {
		setSearchData(d);
		onSearchChange(d);
	};

	return (
		<AsyncPaginate
			placeholder="Search By City.."
			debounceTimeout={600}
			value={searchData}
			onChange={handleSearchChange}
			loadOptions={loadOptions}
		/>
	);
}
