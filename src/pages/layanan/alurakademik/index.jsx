import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {BsClock} from "react-icons/bs";
import LineDivider from "../../../components/LineDivider";

const AlurAkademik = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-4">
						<h2 className="mt-5">Alur Akademik</h2>
						<LineDivider />
					</div>
				</div>
				<div className="row">
					<Card nama="Alur Pendaftaran Magang" link="pendaftaran-magang" />
					<Card nama="Alur Studi Ekskursi" link="studi-ekskursi" />
					<Card nama="Alur Mata Kuliah Mengulang" link="mata-kuliah-mengulang" />
					<Card nama="Alur Seminar Proposal" link="seminar-proposal" />
					<Card nama="Alur Bimbingan Skripsi" link="bimbingan-skripsi" />
					<Card nama="Alur Ujian Komprehensif" link="ujian-komprehensif" />
					<Card nama="Alur Ujian Skripsi" link="ujian-skripsi" />
					<Card nama="Alur Pendaftaran SP" link="pendaftaran-sp" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AlurAkademik;

const Card = props => {
	return (
		<div className="col-md-4 my-4">
			<Link to={props.link} className="akademik-card">
				<div className="card rounded-lg">
					<div className="card-body bg-base text-white d-flex align-items-center">
						<BsClock className="me-3" size={50} />
						<h6 className="card-title card-left d-flex align-items-center p-3">{props.nama}</h6>
					</div>
				</div>
			</Link>
		</div>
	);
};
