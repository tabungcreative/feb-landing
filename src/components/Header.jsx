import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../assets/images/logo_feb.png";

const Header = () => {
	return (
		<Navbar bg="light" variant="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="" width="90" height="60" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home">Beranda</Nav.Link>
						<NavDropdown title="Profil" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Sejarah</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Visi Misi</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Dosen</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Fasilitas</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Struktur Organisasi</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Program Studi" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Akuntasi</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Manajemen</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Perbankan Syari'ah</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Layanan" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Alur Akademik</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.1">File Unduhan</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Pendaftaran Akademik</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Perpustakaan</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
