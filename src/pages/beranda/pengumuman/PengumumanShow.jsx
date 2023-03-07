import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const PengumumanShow = () => {
	const params = useParams();
	const pengumuman = process.env.REACT_APP_API_KEY;
	const {data: quote, loading, error} = useFetch(`${pengumuman}/pengumuman/${params.id}`);

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
								<div>
									<h3 className="text-black mt-5">{quote.judul}</h3>
									{}
									{/* <embed src={"https://ebfis.feb-unsiq.ac.id/storage/" + quote.file_path} className="img-fluid img-thumbnail my-3" alt="iframe" title="frame pengumuman" style={{width: "100%", height: "100vh"}} /> */}
									<div>
										<a href={"https://ebfis.feb-unsiq.ac.id/storage/" + quote.file_path} target="_blank" rel="noopener noreferrer">
											download
										</a>
									</div>
									<UnsafeComponent html={quote.isi} />
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PengumumanShow;

function UnsafeComponent({html}) {
	return <div dangerouslySetInnerHTML={{__html: html}} className="mb-5" />;
}
