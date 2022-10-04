import React from "react";
import HeadingLine from "../../components/HeadingLine";

const Pengumuman = () => {
	return (
		<div className="container-fluid bg-white p-3">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<HeadingLine name="Pengumuman"></HeadingLine>
					</div>
				</div>
				<div className="row">
					<CardPengumuman judul="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd" tanggal="10 oktober 2022" />
					<CardPengumuman judul="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd" tanggal="10 oktober 2022" />
					<CardPengumuman judul="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd" tanggal="10 oktober 2022" />
					<CardPengumuman judul="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd" tanggal="10 oktober 2022" />
					<CardPengumuman judul="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd" tanggal="10 oktober 2022" />
					<CardPengumuman judul="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd" tanggal="10 oktober 2022" />
				</div>
			</div>
		</div>
	);
};

export default Pengumuman;

const CardPengumuman = props => {
	return (
		<div className="col-md-4 mt-3">
			<a href="/" className="pengumuman">
				<div className="card border-1 bg-white">
					<div className="card-body">
						<div className="left-line">
							<h5 className="card-title text-black mb-3">{props.judul}</h5>
							<small className="text-gray">{props.tanggal}</small>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};
