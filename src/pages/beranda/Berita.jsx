import axios from "axios";
import React, {useState, useEffect} from "react";
import img from "../../assets/images/img.JPG";
import HeadingLine from "../../components/HeadingLine";

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
						<HeadingLine name="Berita Terkini"></HeadingLine>
					</div>
				</div>
				<div className="row">
					<CardBerita judul="Berita" gambar={img} isi="asemelekete" tanggal="10 oktober 2022" />
					<CardBerita judul="Berita" gambar={img} isi="asemelekete" tanggal="10 oktober 2022" />
					<CardBerita judul="Berita" gambar={img} isi="asemelekete" tanggal="10 oktober 2022" />
				</div>
			</div>
		</>
	);
};

export default Berita;

const CardBerita = props => {
	return (
		<div className="col-md-4 mt-3">
			<div className="card shadow-sm border-0 hover-shadow">
				<img src={props.gambar} className="card-img-top" alt="..." />
				<div className="card-body my-0">
					<h3 className="card-title mb-3 my-0">{props.judul}</h3>
					<div className="my-0">
						<small>{props.tanggal}</small>
					</div>
					<a href="/" className="">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};
