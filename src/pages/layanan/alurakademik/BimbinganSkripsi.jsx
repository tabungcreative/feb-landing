import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ImageContent from "../../../components/ImageContent";
import img from "../../../assets/images/alur-akademik/infografis feb-05.png";

const BimbinganSkripsi = () => {
	return (
		<>
			<Header />
			<ImageContent nama={img} />
			<Footer />
		</>
	);
};

export default BimbinganSkripsi;
