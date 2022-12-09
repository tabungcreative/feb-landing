import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {BsFillPersonLinesFill, BsFillPersonBadgeFill, BsReverseLayoutTextWindowReverse, BsFillJournalBookmarkFill, BsJournalText, BsFileEarmarkPersonFill, BsFilePersonFill, BsPersonBadgeFill} from "react-icons/bs";
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
					<div className="col-md-4 my-4">
						<Link to="studi-ekskursi" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsReverseLayoutTextWindowReverse className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Studi Ekskursi</h6>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="pendaftaran-magang" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsFillPersonBadgeFill className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Pendaftaran Magang</h6>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="mata-kuliah-mengulang" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsFillJournalBookmarkFill className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Mata Kuliah Mengulang</h6>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="pendaftaran-sp" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsJournalText className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Pendaftaran SP</h6>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="seminar-proposal" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsFillPersonLinesFill className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Seminar Proposal</h6>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="bimbingan-skripsi" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsFileEarmarkPersonFill className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Bimbingan Skripsi</h6>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="ujian-komprehensif" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsFilePersonFill className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Ujian Komprehensif</h6>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="ujian-skripsi" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white d-flex align-items-center" style={{backgroundColor: `#a11717`}}>
									<BsPersonBadgeFill className="me-3" size={50} />
									<h6 className="card-title card-left d-flex align-items-center p-3">Alur Ujian Skripsi</h6>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AlurAkademik;
