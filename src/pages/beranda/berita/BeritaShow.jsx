import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import {AiTwotoneCalendar} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton} from "react-share";

const BeritaShow = () => {
	const params = useParams();
	const ShowBerita = process.env.REACT_APP_API_KEY;
	const data = useFetch(`${ShowBerita}/berita/${params.id}`);
	console.log("current URL 👉️", window.location.href);

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
								<div className="d-flex align-items-center">
									<div>
										<AiTwotoneCalendar /> {data.created_at}
									</div>
									<div className="ms-3">
										<BsFillPersonLinesFill /> {data.penulis}
									</div>
								</div>
								<div className="d-flex align-items-center my-2">
									<FacebookShareButton className="me-2" url={window.location.href}>
										<FacebookIcon size={40} />
									</FacebookShareButton>{" "}
									<WhatsappShareButton className="me-2" url={window.location.href}>
										<WhatsappIcon size={40} />
									</WhatsappShareButton>{" "}
									<TelegramShareButton className="me-2" url={window.location.href}>
										<TelegramIcon size={40} />
									</TelegramShareButton>{" "}
									<TwitterShareButton url={window.location.href}>
										<TwitterIcon size={40} />
									</TwitterShareButton>{" "}
								</div>
								<img src={data.gambar_url} className="img-fluid img-thumbnail my-3" alt="" style={{width: "100%"}} />
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
