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
							<li>Menyelenggarakan pendidikan tinggi di bidang ekonomi untuk mengahasilkan sumber daya manusia yang handal, kreatif, dan inovatif yang dilandasi nilai-nilai Al-Qur’an.</li>
							<li>
								Menyelenggarakan penelitian dan pengembangan ilmu pengetahuan dan teknologi khususnya di bidang ekonomi untuk meningkatkan integritas kepribadian lulusan, menggabungkan jiwa kepemimpinan dan etika professional bidang
								kewirausahaan yang ber-akhlaqul karimah.
							</li>
							<li>Menyelenggarakan pengabdian kepada masyarakat yang memadukan ilmu ekonomi dengan nilai-nilai Al-Qur’an.</li>
							<li>Membangun tata kelola Fakultas yang baik untuk memperkuat system tata pamong yang transparan, akuntabel, dan berkualitas.</li>
							<li>Menjalin kerjasama dengan masyarakat dan lembaga baik dalam negeri maupun luar negeri.</li>
						</ol>
						<h5 className="mt-3">Tujuan</h5>
						<ol className="list-studi">
							<li>Menghasilkan lulusan yang mampu mentransformasikan ilmu ekonomi yang kreatif dan inovatif yang dilandasi nilai-nilai Al-Qur’an.</li>
							<li>Menghasilkan karya penelitian yang mampu menjawab persoalan masyarakat di bidang kewirausahaan sehingga dapat meningkatkan harkat dan martabat manusia.</li>
							<li>Melaksanakan kegiatan pelayanan dan pengabdian kepada masyarakat di bidang ekonomi.</li>
							<li>Membangun kinerja lembaga yang efektif dan efisien untuk menjamin terlaksananya tridarma perguruan tinggi yang berkesinambungan.</li>
							<li>Menghasilkan jejaring Kerjasama dengan masyarakat dan Lembaga baik dalam maupun luar negeriuntuk mengoptimalkan budaya akademik.</li>
						</ol>
						<h5 className="mt-3">Sasaran</h5>
						<ol className="list-studi">
							<li>Agar lulusan mampu menganalisis dan memberikan solusi permasalahan ekonomi di masyarakat.</li>
							<li>Agar lulusan mampu mengaplikasikan ilmu ekonomi di bidang kewirausaan sesuai dengan kompetensi.</li>
							<li>Agar dapat memberikan kontribusi kepada masyarakat dibidang ekonomi.</li>
							<li>Agar kualitas kinerja Lembaga meningkat secara berkesinambungan.</li>
							<li>Agar dapat mengembangkan dan meningkatkan kualitas Tri Darma Perguruan Tinggi lembaga .</li>
						</ol>
						<h5 className="mt-3">Strategi</h5>
						<ol className="list-studi">
							<li>Melakukan penataan kurikulum yang memadukan ilmu Al Quran dan ilmu ekonomi dengan nilai-nilai kepesantrenan.</li>
							<li>Melakukan penataan kurikulum yang memadukan ilmu Al Quran dan ilmu ekonomi dengan nilai-nilai kepesantrenan.</li>
							<li>Memfasilitasi dan menyelengarakan pengabdian yang berbasis ekonomi agar bermanfaat bagi masyarakat luas.</li>
							<li>Menguatkan organisasi yang berbasis teknologidan meningkatkan sumberdaya manusia yang ber-akhlak (akuntabel, kompeten, harmonis, loyal, adaptif, dan kolaboratif).</li>
							<li>Membentuk tim KERJASAMA dengan berbagai pihak baik dalam negeri maupun luar negeri</li>
						</ol>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default VisiMisi;
