import React from "react";
import {MDBCarousel, MDBCarouselItem} from "mdb-react-ui-kit";

const Hero = () => {
	return (
		<>
			<MDBCarousel showControls fade>
				<MDBCarouselItem className="w-100 d-block" itemId={1} src="https://is3.cloudhost.id/storage-feb/assets/images/BANNER_1.png" alt="..." />
				<MDBCarouselItem className="w-100 d-block" itemId={2} src="https://is3.cloudhost.id/storage-feb/assets/images/BANNER_2.png" alt="..." />
				<MDBCarouselItem className="w-100 d-block" itemId={3} src="https://is3.cloudhost.id/storage-feb/assets/images/BANNER_1.png" alt="..." />
			</MDBCarousel>
		</>
	);
};

export default Hero;
