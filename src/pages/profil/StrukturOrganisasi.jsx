import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const StrukturOrganisasi = () => {
	return (
		<>
			<Header />
			<Banner gambar="https://is3.cloudhost.id/storage-feb/assets/images/BANNER4.png" alt="banner struktur organisasi" />
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<img src="https://is3.cloudhost.id/storage-feb/assets/images/STRUKTUR%20ORGANISASI%20FEB%20UNSIQ%20film.png" alt="gambar organisasi" className="img-fluid shadow-sm" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default StrukturOrganisasi;
