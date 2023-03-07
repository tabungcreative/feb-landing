import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ImageContent from "../../../components/ImageContent";
import img from "../../../assets/images/alur-akademik/infografis feb-04.png";

const Sempro = () => {
	return (
		<>
			<Header />
			<ImageContent nama={img} />
			<Footer />
		</>
	);
};

export default Sempro;
