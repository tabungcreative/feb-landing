import React from "react";
import {MDBCarousel, MDBCarouselItem} from "mdb-react-ui-kit";
import banner1 from "../assets/images/BANNER_1.png";
import banner2 from "../assets/images/BANNER_2.png";

const Hero = () => {
	return (
		<>
			<MDBCarousel showControls fade>
				<MDBCarouselItem className="w-100 d-block" itemId={1} src={banner1} alt="..." />
				<MDBCarouselItem className="w-100 d-block" itemId={2} src={banner2} alt="..." />
				<MDBCarouselItem className="w-100 d-block" itemId={3} src={banner1} alt="..." />
			</MDBCarousel>
		</>
	);
};

export default Hero;
