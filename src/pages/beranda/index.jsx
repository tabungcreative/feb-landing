import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Berita from "./Berita";
import Pengumuman from "./Pengumuman";
import Program from "./Program";
import gambar from "../../assets/images/img.JPG";
import "./style.css";
const Beranda = () => {
	return (
		<>
			<Header />
			<Hero />

			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-5 mb-4">
						<img src={gambar} className="img-fluid" alt={gambar} />
					</div>
					<div className="col-lg-2 d-flex justify-content-center">
						<div className="vl"></div>
					</div>
					<div className="col-lg-5">
						<h3>Visi</h3>
						<p>Menjadi Fakultas Ekonomi dan Bisnis yang menjunjung nilai-nilai Islam dan unggul dibidang Kewirausahaan pada Tahun 2031.</p>
						<a href="/" className="red">
							Selengkapnya
						</a>
					</div>
				</div>
			</div>
			<Pengumuman />
			<Berita />
			<Program />
			<Footer />
		</>
	);
};

export default Beranda;
