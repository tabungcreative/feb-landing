import React from "react";
import useFetch from "../../../hooks/useFetch";
import {useParams} from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const ProgramShow = () => {
	const params = useParams();
	const program = process.env.REACT_APP_PROGRAM;
	const data = useFetch(`${program}/${params.id}`);

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
								<h3 className="text-black mt-5">{data.nama_program}</h3>
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

export default ProgramShow;

function UnsafeComponent({html}) {
	return <div dangerouslySetInnerHTML={{__html: html}} className="mb-5" />;
}
