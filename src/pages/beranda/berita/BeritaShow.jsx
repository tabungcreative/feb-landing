import axios from "axios";
import React, {useEffect, useState} from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import HeadingLine from "../../../components/HeadingLine";
// import Hero from "../../../components/Hero";
import {useParams} from "react-router-dom";

const BeritaShow = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const params = useParams();
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(`http://ebfis.feb-unsiq.ac.id/api/berita/${params.id}`);
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
	}, [params]);
	return (
		<>
			<Header />
			{/* <Hero /> */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<HeadingLine name="Berita Terkini" />
						{loading && <div>Tunggu Sebentar...</div>}
						{error && <div>{`data gagal dimuat - ${error}`}</div>}
						{data && (
							<>
								<h4 className="text-black-50">{data.judul}</h4>
								<img src={data.gambar_url} className="img-fluid img-thumbnail my-3" alt="" />
								<UnsafeComponent html={data.isi} />
							</>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BeritaShow;

function UnsafeComponent({html}) {
	return <div dangerouslySetInnerHTML={{__html: html}} />;
}
