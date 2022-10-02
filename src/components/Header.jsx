import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../assets/images/logo_feb.png";
import {Link} from "react-router-dom";
import "./styles.css";
const Header = () => {
	return (
		<Navbar bg="light" variant="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<img src={logo} alt="" width="90" height="60" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link>
							<Link id="link" to="/">
								Beranda
							</Link>
						</Nav.Link>
						<NavDropdown title="Profil" id="basic-nav-dropdown link">
							<NavDropdown.Item>
								<Link id="link" to="/sejarah-feb">
									Sejarah
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link id="link" to="/visi-misi-feb">
									Visi Misi
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link id="link" to="/dosen-feb">
									Dosen
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link id="link" to="/fasilitas-feb">
									Fasilitas
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link id="link" to="/struktur-organisasi-feb">
									Struktur Organisasi
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Program Studi" id="basic-nav-dropdown link">
							<NavDropdown.Item>
								<Link id="link" to="/prodi-akuntansi">
									Akuntasi
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link id="link" to="/prodi-manajemen">
									Manajemen
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link id="link" to="/prodi-perbankan-syariah">
									Perbankan Syari'ah
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Layanan" id="basic-nav-dropdown">
							<NavDropdown.Item>
								<Link id="link">Alur Akademik</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link id="link">File Unduhan</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<a href=""> Pendaftaran Akademik</a>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<a href="">Perpustakaan</a>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
