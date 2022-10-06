import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
// import HeadingLine from "../../../components/HeadingLine";
import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const BeritaShow = () => {
	const params = useParams();
	const ShowBerita = process.env.REACT_APP_BERITA;
	const data = useFetch(`${ShowBerita}/${params.id}`);
	return (
		<>
			<Header />
			{/* <Hero /> */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						{/* <HeadingLine name="Berita Terkini" /> */}
						{data && (
							<>
								<h3 className="text-black mt-5">{data.judul}</h3>
								<img src={data.gambar_url} className="img-fluid img-thumbnail my-3" alt="" style={{width: "100vw", height: "100vh"}} />
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
	return <div dangerouslySetInnerHTML={{__html: html}} className="mb-5" />;
}
