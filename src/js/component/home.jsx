import React from "react";
import Counter from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div class="row">
            <div class="col-md-2 ">
            <i class="fas fa-clock"></i>
				</div>
			<dic class="col-md-10"><Counter/></dic>
		</div>
		</div>
	);
};

export default Home;
