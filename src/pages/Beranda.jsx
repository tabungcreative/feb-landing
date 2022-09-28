import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Menubar from "../components/Menubar";
import Berita from "./berita/Berita";

function Beranda() {
	return (
		<>
			<Menubar />
			<Hero />
			{/* <Berita /> */}
			<Footer />
		</>
	);
}

export default Beranda;
