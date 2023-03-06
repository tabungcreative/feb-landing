import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ImageContent from "../../components/ImageContent";
import imgBanner from "../../assets/images/banner/BANNER4.png";
import imgContent from "../../assets/images/struktur.png";

const StrukturOrganisasi = () => {
	return (
		<>
			<Header />
			<Banner gambar={imgBanner} alt="banner struktur organisasi" />
			<ImageContent nama={imgContent} alt="struktur organisasi feb" />
			<Footer />
		</>
	);
};

export default StrukturOrganisasi;
