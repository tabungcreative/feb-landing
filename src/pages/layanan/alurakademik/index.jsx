import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {BsFillPersonLinesFill, BsFillPersonBadgeFill, BsReverseLayoutTextWindowReverse, BsFillJournalBookmarkFill, BsJournalText, BsFileEarmarkPersonFill, BsFilePersonFill} from "react-icons/bs";
import {FaUserGraduate} from "react-icons/fa";
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
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<BsReverseLayoutTextWindowReverse className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Studi Ekskursi</h5>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="pendaftaran-magang" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<BsFillPersonBadgeFill className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Pendaftaran Magang</h5>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="mata-kuliah-mengulang" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<BsFillJournalBookmarkFill className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Mata Kuliah Mengulang</h5>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="pendaftaran-sp" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<BsJournalText className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Pendaftaran SP</h5>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="seminar-proposal" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<BsFillPersonLinesFill className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Seminar Proposal</h5>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="bimbingan-skripsi" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<BsFileEarmarkPersonFill className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Bimbingan Skripsi</h5>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="ujian-komprehensif" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<BsFilePersonFill className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Ujian Komprehensif</h5>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-4 my-4">
						<Link to="ujian-skripsi" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-gradasi text-white d-flex align-items-center">
									<FaUserGraduate className="me-3" size={50} />
									<h5 className="card-title card-left d-flex align-items-center p-3">Alur Ujian Skripsi</h5>
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
