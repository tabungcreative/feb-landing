import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Link} from "react-router-dom";

const ErrorPage = () => {
	return (
		<>
			<Header />
			{/* <div classNameName="container">
				<div classNameName="row">
					<div className="col-lg-12 col-md-8 col-sm-6"></div>
				</div>
			</div> */}
			<div className="d-flex align-items-center justify-content-center vh-100">
				<div className="text-center row">
					<div className=" col-md-6">
						<img src="https://is3.cloudhost.id/storage-feb/assets/images/error.png" alt="gambar error" className="img-fluid" />
					</div>
					<div className=" col-md-6 mt-5">
						<p className="fs-3">
							<span className="text-danger">Opps!</span> Halaman tidak ditemukan.
						</p>
						<p className="lead">Halaman yang anda cari tidak ada.</p>
						<Link to="/" className="btn btn-base">
							Kembali ke Beranda
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ErrorPage;
