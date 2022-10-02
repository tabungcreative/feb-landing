import axios from "axios";
import React, {useState, useEffect} from "react";
import img from "../../assets/images/img.JPG";

const Berita = () => {
	// const [data, setData] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);
	// useEffect(() => {
	// 	const getData = async () => {
	// 		try {
	// 			const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
	// 			setData(response.data.data);
	// 			console.log(response);
	// 			setError(null);
	// 			console.log(data);
	// 		} catch (err) {
	// 			setError(err.message);
	// 			setData(null);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	getData();
	// }, []);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<div className="mt-5 separator">
							<h3 className=" ">Berita Terkini</h3> <div className="divider-text"></div>
							<div className="line"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 mt-3">
						<div className="card bg-dark text-light">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-laptop"></i>
								</div>
								<h3 className="card-title mb-3">Virtual</h3>
								<p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?</p>
								<a href="/" className="btn btn-primary">
									Read More
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-3">
						<div className="card bg-dark text-light">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-laptop"></i>
								</div>
								<h3 className="card-title mb-3">Virtual</h3>
								<p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?</p>
								<a href="/" className="btn btn-primary">
									Read More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Berita;
