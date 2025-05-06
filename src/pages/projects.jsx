import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projetos | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Coisas que construí buscando causar impacto com código.
						</div>

						<div className="subtitle projects-subtitle">
							Ao longo dos seis semestres do curso de Desenvolvimento de Software Multiplataforma na FATEC Zona Leste, desenvolvi diversos projetos que refletem meu crescimento técnico e criativo.
							Nesta seção, você encontrará um projeto representativo de cada semestre, abordando diferentes áreas como desenvolvimento web, mobile, banco de dados, integração de APIs, e muito mais. Cada um deles foi construído com base nos conhecimentos adquiridos em sala de aula e aprimorados com pesquisa e prática.
							Sinta-se à vontade para explorar e conhecer um pouco mais da minha jornada como desenvolvedor!
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
