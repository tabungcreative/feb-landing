import axios from "axios";
import React, {useState, useEffect} from "react";
import HeadingLine from "../../components/HeadingLine";
import {Link} from "react-router-dom";

const Berita = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(`http://ebfis.feb-unsiq.ac.id/api/berita?size=3`, {
					headers: {
						"Access-Control-Allow-Origin": "*",
					},
				});
				setData(response.data.data);
				setError(null);
			} catch (err) {
				setError(err.message);
				setData(null);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<HeadingLine name="Berita Terkini"></HeadingLine>
					</div>
				</div>
				<div className="row">
					{loading && <div>Tunggu Sebentar...</div>}
					{error && <div>{`data gagal dimuat - ${error}`}</div>}
					{data && data.map(brt => <CardBerita judul={brt.judul} gambar={brt.gambar_url} isi={brt.isi} tanggal={brt.created_at} id={brt.id} key={brt.id} />)}
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
				<img src={props.gambar} className="card-img-top img-thumbnail img-fluid " alt="..." />
				<div className="card-body my-0">
					<h5 className="card-title mb-3 my-0">{props.judul}</h5>
					<div className="my-0">
						<small>{props.tanggal}</small>
					</div>
					<Link to={"/berita/" + props.id} className="link">
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};
