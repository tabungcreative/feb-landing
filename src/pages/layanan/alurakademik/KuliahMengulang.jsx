import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ImageContent from "../../../components/ImageContent";
import img from "../../../assets/images/alur-akademik/infografis feb-03.png";

const KuliahMengulang = () => {
	return (
		<>
			<Header />
			<ImageContent nama={img} />
			<Footer />
		</>
	);
};

export default KuliahMengulang;
