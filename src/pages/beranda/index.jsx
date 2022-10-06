import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import Berita from "./berita/Berita";
import Pengumuman from "./pengumuman/Pengumuman";
import Program from "./program/Program";
import "./style.css";

const Beranda = () => {
	return (
		<div className="bg-light">
			<Header />
			<Hero />
			<div className="container mt-3 p-3">
				<div className="row d-flex align-items-center mt-3">
					<div className="col-lg-5 mb-4">
						<img src="https://is3.cloudhost.id/storage-feb/assets/images/logo_feb.png" className="img-fluid" alt="logo feb" />
					</div>
					<div className="col-lg-2 d-flex justify-content-center">
						<div className="vl"></div>
					</div>
					<div className="col-lg-5">
						<h3>Visi</h3>
						<p>Menjadi Fakultas Ekonomi dan Bisnis yang menjunjung nilai-nilai Islam dan unggul dibidang Kewirausahaan pada Tahun 2031.</p>
						<Link to="/visi-misi-feb" id="red">
							Selengkapnya
						</Link>
					</div>
				</div>
			</div>
			<Pengumuman />
			<Berita />
			<Program />
			<Footer />
		</div>
	);
};

export default Beranda;
