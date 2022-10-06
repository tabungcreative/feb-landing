import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ImageContent from "../../components/ImageContent";

const StrukturOrganisasi = () => {
	return (
		<>
			<Header />
			<Banner gambar="https://is3.cloudhost.id/storage-feb/assets/images/BANNER4.png" alt="banner struktur organisasi" />
			<ImageContent nama="https://is3.cloudhost.id/storage-feb/assets/images/STRUKTUR%20ORGANISASI%20FEB%20UNSIQ%20film.png" />
			<Footer />
		</>
	);
};

export default StrukturOrganisasi;
