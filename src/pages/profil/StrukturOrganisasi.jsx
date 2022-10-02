import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import banner from "../../assets/images/BANNER4.png";
import org from "../../assets/images/STRUKTUR ORGANISASI FEB UNSIQ film.png";

const StrukturOrganisasi = () => {
	return (
		<>
			<Header />
			<Banner gambar={banner} alt={banner} />
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<img src={org} alt={org} className="img-fluid shadow-sm" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default StrukturOrganisasi;
