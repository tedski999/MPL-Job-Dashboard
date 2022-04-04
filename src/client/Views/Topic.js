import React from "react";
import { useParams } from "react-router-dom";

export default function() {
	const { name } = useParams();
	return (
		<div>
			<p>Topic: {name}</p>
		</div>
	);
}
