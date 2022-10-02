import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import banner from "../../assets/images/BANNER3.png";

const VisiMisi = () => {
	return (
		<>
			<Header />
			<Banner gambar={banner} alt={banner} />
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-12 col-md-8 col-sm-4">
						<h5 className="mt-3">Visi</h5>
						<p>“Menjadi Fakultas Ekonomi dan Bisnis yang menjunjung nilai-nilai Islam dan unggul dibidang Kewirausahaan pada Tahun 2031”.</p>
						<h5 className="mt-3">Misi</h5>
						<ol className="list-studi">
							<li>
								Menyelenggarakan penelitian dan pengembangan ilmu pengetahuan dan teknologi khususnya di bidang Akuntansi untuk meningkatkan integritas kepribadian lulusan, menggabungkan jiwa kepemimpinan dan etika professional bidang
								kewirausahaan yang ber-akhlaqul karimah.
							</li>
							<li>Menyelenggarakan pengabdian kepada masyarakat yang memadukan ilmu Akuntansi dengan nilai-nilai islami.</li>
							<li>Membangun tata kelola prodi Akuntansi yang baik untuk memperkuat sistem tata pamong yang transparan, akuntabel, dan berkualitas.</li>
							<li>Menjalin kerjasama dengan masyarakat dan lembaga baik dalam negeri maupun luar negeri.</li>
						</ol>
						<h5 className="mt-3">Tujuan</h5>
						<ol className="list-studi">
							<li>Menghasilkan lulusan yang mampu mentransformasikan ilmu Akuntansi yang kreatif dan inovatif yang dilandasi nilai-nilai Islami.</li>
							<li>Menghasilkan karya penelitian yang mampu menjawab persoalan masyarakat di bidang kewirausahaan sehingga dapat meningkatkan harkat dan martabat manusia. </li>
							<li>Melaksanakan kegiatan pelayanan dan pengabdian kepada masyarakat di bidang akuntansi.</li>
							<li>Membangun kinerja lembaga yang efektif dan efisien untuk menjamin terlaksananya Tridarma Perguruan Tinggi yang berkesinambungan.</li>
							<li>Menghasilkan jejaring kerjasama dengan masyarakat dan lembaga baik dalam maupun luar negeri untuk mengoptimalkan budaya akademik.</li>
						</ol>
						<h5 className="mt-3">Sasaran</h5>
						<ol className="list-studi">
							<li>Agar lulusan mampu menganalisis dan memberikan solusi permasalahan Akuntansi di masyarakat.</li>
							<li>Agar lulusan mampu mengaplikasikan ilmu Akuntansi di bidang kewirausaan sesuai dengan kompetensi.</li>
							<li>Agar dapat memberikan kontribusi kepada masyarakat dibidang Akuntansi.</li>
							<li>Agar kualitas kinerja lembaga meningkat secara berkesinambungan.</li>
							<li>Agar dapat mengembangkan dan meningkatkan kualitas Tridarma Perguruan Tinggi lembaga.</li>
						</ol>
						<h5 className="mt-3">Strategi</h5>
						<ol className="list-studi">
							<li>Melakukan penataan kurikulum yang memadukan ilmu Al-Quran dan ilmu Akuntansi dengan nilai-nilai kepesantrenan.</li>
							<li>Memfasilitasi kegiatan penelitian dan melakukan pemutakhiran hasil penelitian secara berkala agar lebih bermanfaat bagi masyarakat.</li>
							<li>Memfasilitasi dan menyelengarakan pengabdian yang berbasis akuntansi agar bermanfaat bagi masyarakat luas.</li>
							<li>Menguatkan organisasi yang berbasis teknologi dan meningkatkan sumberdaya manusia yang ber-akhlak (akuntabel, kompeten, harmonis, loyal, adaptif, dan kolaboratif).</li>
							<li>Membentuk tim kerjasama dengan berbagai pihak baik dalam negeri maupun luar negeri.</li>
						</ol>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default VisiMisi;
