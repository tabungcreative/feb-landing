import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {BsFillClockFill} from "react-icons/bs";
const AlurAkademik = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="row my-4">
					<div className="col-md-4">
						<Link to="/alur-akademik" className="akademik-card">
							<div className="card rounded-lg">
								<div className="card-body bg-base text-white">
									<div className=""></div>
									<h5 class="card-title border border-white p-2 eound">Pembayaran Mata Kuliah Mengulang</h5>
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
