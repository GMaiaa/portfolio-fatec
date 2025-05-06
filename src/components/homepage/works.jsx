import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import treeLogo from "../../assets/reciclase_logo.jpeg"
import logoItau from "../../assets/2023_Itaú_Unibanco_Logo.png"

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiência"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={treeLogo}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Tree - Soluções ESG Integradas</div>
							<div className="work-subtitle">
								Dev FullStack Jr - Freelancer
							</div>
							<div className="work-duration">2023 - O momento</div>
						</div>

						<div className="work">
							<img
								src={logoItau}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Itaú Unibanco</div>
							<div className="work-subtitle">
								Estagiário em Análise de Dados
							</div>
							<div className="work-duration">2025 - O momento</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
