import React from "react";

const ImageContent = props => {
	return (
		<>
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-6">
						<img src={props.nama} alt="konten gambar" className="img-fluid shadow-sm my-5" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageContent;
