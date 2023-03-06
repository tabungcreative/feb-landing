import React from "react";
import {MDBCarousel, MDBCarouselItem} from "mdb-react-ui-kit";
import img1 from "../assets/images/banner/BANNER_1.png";
import img2 from "../assets/images/banner/BANNER_2.png";

const Hero = () => {
	return (
		<>
			<MDBCarousel showControls fade>
				<MDBCarouselItem className="w-100 d-block" itemId={1} src={img1} alt="..." />
				<MDBCarouselItem className="w-100 d-block" itemId={2} src={img2} alt="..." />
				<MDBCarouselItem className="w-100 d-block" itemId={3} src={img1} alt="..." />
			</MDBCarousel>
		</>
	);
};

export default Hero;
