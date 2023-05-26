import React from "react";
import { Lista } from "./lista.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<div className="bg-info">
			<Lista/>
		</div>
		</>
	);
};

export default Home;
