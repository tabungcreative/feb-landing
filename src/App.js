import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Beranda from "./pages/beranda";
import Sejarah from "./pages/profil/Sejarah";
import StrukturOrganisasi from "./pages/profil/StrukturOrganisasi";
import VisiMisi from "./pages/profil/VisiMisi";
import Akuntansi from "./pages/program-studi/Akuntansi";
import Manajemen from "./pages/program-studi/Manajemen";
import PerbankanSyariah from "./pages/program-studi/PerbankanSyariah";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import BeritaShow from "./pages/beranda/berita/BeritaShow";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/berita/:id" element={<BeritaShow />} />
				<Route path="/sejarah-feb" element={<Sejarah />} />
				<Route path="/visi-misi-feb" element={<VisiMisi />} />
				<Route path="/struktur-organisasi-feb" element={<StrukturOrganisasi />} />
				<Route path="/prodi-akuntansi" element={<Akuntansi />} />
				<Route path="/prodi-manajemen" element={<Manajemen />} />
				<Route path="/prodi-perbankan-syariah" element={<PerbankanSyariah />} />
				{/* <Route path="/alur-akademik-feb" element={<AlurAkademik />} /> */}
				{/* <Route path="/file-unduhan" element={<FileUnduhan />} /> */}
				{/* Halaman Not found */}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
