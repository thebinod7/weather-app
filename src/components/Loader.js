import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Loader() {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="60vh"
		>
			<div>
				<CircularProgress disableShrink />
			</div>
		</Box>
	);
}
