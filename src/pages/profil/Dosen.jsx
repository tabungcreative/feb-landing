import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LineDivider from "../../components/LineDivider";
import useFetch from "../../hooks/useFetch";

const Dosen = () => {
	const dosen = process.env.REACT_APP_API_KEY;
	const data = useFetch(`${dosen}/dosen`);
	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<h2 className="mt-5">Dosen Fakultas Ekonomi dan Bisnis</h2>
						<LineDivider />
						<p>daftar dosen fakultas</p>
						<ul className="mb-5">
							{data &&
								data.map(dsn => (
									<>
										<li>{dsn.nama}</li>
									</>
								))}
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Dosen;
