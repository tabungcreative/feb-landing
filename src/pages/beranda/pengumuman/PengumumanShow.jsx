import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const PengumumanShow = () => {
	const params = useParams();
	const pengumuman = process.env.REACT_APP_API_KEY;
	const data = useFetch(`${pengumuman}/pengumuman/${params.id}`);

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
								<div>
									<h3 className="text-black mt-5">{data.judul}</h3>
									{}
									<iframe src={data.file_url} className="img-fluid img-thumbnail my-3" alt="iframe" title="frame pengumuman" style={{width: "100%", height: "100vh"}} />
									<div>
										<a href={data.file_url} target="_blank" rel="noopener noreferrer">
											download
										</a>
									</div>
									<UnsafeComponent html={data.isi} />
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
