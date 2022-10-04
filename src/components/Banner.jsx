import React from "react";

const Banner = props => {
	return (
		<>
			<div>
				<img src={props.gambar} className="img-fluid banner" alt={props.alt} />
			</div>
		</>
	);
};

export default Banner;
