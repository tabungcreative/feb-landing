import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Beranda from "./pages/beranda";
import Sejarah from "./pages/profil/Sejarah";
import StrukturOrganisasi from "./pages/profil/StrukturOrganisasi";
import VisiMisi from "./pages/profil/VisiMisi";
import Akuntansi from "./pages/program-studi/Akuntansi";
import Manajemen from "./pages/program-studi/Manajemen";
import PerbankanSyariah from "./pages/program-studi/PerbankanSyariah";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/sejarah-feb" element={<Sejarah />} />
				<Route path="/visi-misi-feb" element={<VisiMisi />} />
				<Route path="/struktur-organisasi-feb" element={<StrukturOrganisasi />} />
				<Route path="/prodi-akuntansi" element={<Akuntansi />} />
				<Route path="/prodi-manajemen" element={<Manajemen />} />
				<Route path="/prodi-perbankan-syariah" element={<PerbankanSyariah />} />
				<Route path="/alur-akademik-feb" />
				<Route path="/file-unduhan-feb" />
			</Routes>
		</Router>
	);
}

export default App;
