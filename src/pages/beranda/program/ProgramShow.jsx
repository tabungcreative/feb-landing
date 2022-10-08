import React from "react";
import useFetch from "../../../hooks/useFetch";
import {useParams} from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const ProgramShow = () => {
	const params = useParams();
	const program = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${program}/program/${params.id}`);

	return (
		<>
			<Header />
			{/* <Hero /> */}
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						{/* <HeadingLine name="Berita Terkini" /> */}
						{quote && (
							<>
								{loading && <div>A moment please...</div>}
								{error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
								<h3 className="text-black mt-5 mb-3">{quote.nama_program}</h3>
								<div className="d-flex align-content-center justify-content-center mb-5">
									<img src={quote.gambar_url} className="img-fluid my-3" alt="" style={{maxWidth: "50%"}} />
								</div>
								<UnsafeComponent html={quote.isi} />
							</>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProgramShow;

function UnsafeComponent({html}) {
	return <div dangerouslySetInnerHTML={{__html: html}} className="mb-5" />;
}
