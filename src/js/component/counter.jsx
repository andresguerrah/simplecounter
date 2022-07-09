
import React from "react";

function Counter(props) {
return (

    <section id="counter" class="sec-padding">
		<div class="container">
			<div class="row">

				<div class="col-md-2 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">{props.one}</p>
						</div>
				</div>
				<div class="col-md-2 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">{props.two}</p>
						 </div>
				</div>
				<div class="col-md-2 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">{props.three}</p>
						</div>
				</div>
				<div class="col-md-2 ">
					<div class="count"> <span class="fa fa-smile-o"></span>
						<p class="number">{props.four}</p>
						 </div>
				</div>

			</div>
		</div>
	</section>
        );
    }
    export default Counter;