import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LineDivider from "../../components/LineDivider";
import useFetch from "../../hooks/useFetch";

const Fasilitas = () => {
	const fasilitas = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${fasilitas}/fasilitas/?size=10`);
	return (
		<div>
			<Header />
			<div className="container min-vh-100">
				<div className="row">
					<div className="col-lg-12 col-mf-8 col-sm-6">
						<h2 className="mt-4">Fasilitas FEB</h2>
						<LineDivider />
						{loading && <div>A moment please...</div>}
						{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
						{quote && quote.data.map(fls => <CardFasilitas nama={fls.nama_fasilitas} gambar={fls.gambar_url} deskripsi={fls.isi} />)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Fasilitas;

const CardFasilitas = props => {
	return (
		<div className="card mb-3 border-0">
			<div className="row g-0">
				<div className="col-md-4">
					<img src={props.gambar} className="img-fluid rounded-start" alt="gambar fasilitas" style={{maxWidth: "20rem"}} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.nama}</h5>
						<UnsafeComponent html={props.deskripsi} />
					</div>
				</div>
			</div>
		</div>
	);
};

function UnsafeComponent({html}) {
	return <div dangerouslySetInnerHTML={{__html: html}} className="mb-5" />;
}
