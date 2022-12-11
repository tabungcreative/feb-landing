import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import "./styles.css";
const Header = () => {
	return (
		<Navbar bg="light" variant="light" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand>
					<LinkContainer to="/">
						<img src="https://is3.cloudhost.id/storage-feb/assets/images/logo_feb.png" alt="" width="90" height="60" />
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto medium">
						<LinkContainer to="/">
							<Nav.Link>Beranda</Nav.Link>
						</LinkContainer>
						<NavDropdown title="Profil" id="basic-nav-dropdown link">
							<LinkContainer to="/sejarah-feb">
								<NavDropdown.Item>Sejarah</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/visi-misi-feb">
								<NavDropdown.Item>Visi Misi</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/dosen-feb">
								<NavDropdown.Item>Dosen</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/fasilitas-feb">
								<NavDropdown.Item>Fasilitas</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/struktur-organisasi-feb">
								<NavDropdown.Item>Struktur Organisasi</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown title="Program Studi" id="basic-nav-dropdown link">
							<LinkContainer to="/prodi-akuntansi">
								<NavDropdown.Item>Akuntasi</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/prodi-manajemen">
								<NavDropdown.Item>Manajemen</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/prodi-perbankan-syariah">
								<NavDropdown.Item>Perbankan Syari'ah</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown title="Layanan" id="basic-nav-dropdown">
							<LinkContainer to="/alur-akademik">
								<NavDropdown.Item>Alur Akademik</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/file-unduhan">
								<NavDropdown.Item>File Unduhan</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Item href="https://diaregsy.feb-unsiq.ac.id" target="_blank">
								Pendaftaran Akademik
							</NavDropdown.Item>
							<NavDropdown.Item href="https://digilib.feb-unsiq.ac.id" target="_blank">
								Perpustakaan
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
