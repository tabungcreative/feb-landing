import React from "react";

const HeadingLine = props => {
	return (
		<div className="mt-5 separator">
			<h3 className=" ">{props.name}</h3> <div className="divider-text"></div>
			<div className="line"></div>
		</div>
	);
};

export default HeadingLine;
