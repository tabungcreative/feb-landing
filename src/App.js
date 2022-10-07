import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Beranda from "./pages/beranda";
import Sejarah from "./pages/profil/Sejarah";
import StrukturOrganisasi from "./pages/profil/StrukturOrganisasi";
import VisiMisi from "./pages/profil/VisiMisi";
import Akuntansi from "./pages/program-studi/Akuntansi";
import Manajemen from "./pages/program-studi/Manajemen";
import PerbankanSyariah from "./pages/program-studi/PerbankanSyariah";
import ErrorPage from "./pages/ErrorPage";
import BeritaShow from "./pages/beranda/berita/BeritaShow";
import PengumumanShow from "./pages/beranda/pengumuman/PengumumanShow";
import ProgramShow from "./pages/beranda/program/ProgramShow";
import AlurAkademik from "./pages/layanan/alurakademik";
import PendaftaranMagang from "./pages/layanan/alurakademik/PendaftaranMagang";
import "./App.css";
import StudiEkskursi from "./pages/layanan/alurakademik/StudiEkskursi";
import KuliahMengulang from "./pages/layanan/alurakademik/KuliahMengulang";
import Sempro from "./pages/layanan/alurakademik/Sempro";
import BimbinganSkripsi from "./pages/layanan/alurakademik/BimbinganSkripsi";
import Kompre from "./pages/layanan/alurakademik/Kompre";
import Skripsi from "./pages/layanan/alurakademik/Skripsi";
import KuliahSP from "./pages/layanan/alurakademik/KuliahSP";
import FileUnduhan from "./pages/layanan/FIleUnduhan";
import Dosen from "./pages/profil/Dosen";
import Fasilitas from "./pages/profil/Fasilitas";

function App() {
	return (
		<Router>
			<Routes>
				{/* routing halaman index atau beranda */}
				<Route path="" element={<Beranda />} />
				<Route path="/berita/:id" element={<BeritaShow />} />
				<Route path="/pengumuman/:id" element={<PengumumanShow />} />
				<Route path="/program/:id" element={<ProgramShow />} />
				{/* routing bagian profil */}
				<Route path="/sejarah-feb" element={<Sejarah />} />
				<Route path="/dosen-feb" element={<Dosen />}></Route>
				<Route path="/fasilitas-feb" element={<Fasilitas />}></Route>
				<Route path="/visi-misi-feb" element={<VisiMisi />} />
				<Route path="/struktur-organisasi-feb" element={<StrukturOrganisasi />} />
				{/* routing bagian program studi */}
				<Route path="/prodi-akuntansi" element={<Akuntansi />} />
				<Route path="/prodi-manajemen" element={<Manajemen />} />
				<Route path="/prodi-perbankan-syariah" element={<PerbankanSyariah />} />
				{/* routing untuk alur akademik */}
				<Route path="/alur-akademik">
					<Route path="" index element={<AlurAkademik />}></Route>
					<Route path="pendaftaran-magang" element={<PendaftaranMagang />}></Route>
					<Route path="studi-ekskursi" element={<StudiEkskursi />}></Route>
					<Route path="mata-kuliah-mengulang" element={<KuliahMengulang />}></Route>
					<Route path="seminar-proposal" element={<Sempro />}></Route>
					<Route path="bimbingan-skripsi" element={<BimbinganSkripsi />}></Route>
					<Route path="ujian-komprehensif" element={<Kompre />}></Route>
					<Route path="ujian-skripsi" element={<Skripsi />}></Route>
					<Route path="pendaftaran-sp" element={<KuliahSP />}></Route>
				</Route>
				{/*  */}
				<Route path="/file-unduhan" element={<FileUnduhan />} />
				{/* Halaman Not found */}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
