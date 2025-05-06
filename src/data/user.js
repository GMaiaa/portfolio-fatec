import sneakers from "../assets/sneakers.png"
import pdv from "../assets/pdv.png"
import quitanda from "../assets/quitanda.png"
import adopet from "../assets/adopet.png"
import airball from "../assets/airbal.png"
import loading from "../assets/animation-loading-circle-icon-loading-gif-loading-screen-gif-loading-spinner-gif-loading-animation-loading-on-black-background-free-video.jpg"

const INFO = {
	main: {
		title: "Portfolio Fatec - Gabriel Maia",
		name: "Tharindu N.",
		email: "gabrielmaiaa22@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/GMaiaa",
		linkedin: "https://www.linkedin.com/in/gabrielmaiasoares/",
		instagram: "https://www.instagram.com/gabrielmaiaas/",
	},

	homepage: {
		title: "Olá! Meu nome é Gabriel Maia e atualmente curso Desenvolvimento de Software Multiplataforma na FATEC Zona Leste. Seja bem-vindo ao meu portfólio!",
		description:
			"Neste espaço, você encontrará os principais projetos que desenvolvi ao longo da minha trajetória acadêmica. Cada um deles reflete meu aprendizado, evolução e paixão por tecnologia. Fique à vontade para explorar!",
	},

	about: {
		title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Projeto 1 - Vitrine de Tênis",
			description:
				"Este projeto consiste em uma página web simples desenvolvida com HTML e CSS, com foco na apresentação visual de diferentes modelos de tênis. A proposta foi explorar a estruturação semântica do HTML e a estilização com CSS puro, criando um layout limpo, responsivo e de fácil navegação.",
			logo: sneakers,
			linkText: "Acessar repositório",
			link: "https://github.com/GMaiaa/sneakersS1",
		},

		{
			title: "Projeto 2 - PDV",
			description:
				"Este projeto é PDV desenvolvido com React e Firebase. A aplicação permite realizar operações básicas de CRUD, para o gerenciamento de produtos. Foi uma oportunidade de aprofundar o uso de hooks no React, integração com banco de dados Firebase e práticas de organização de componentes.",
			logo: pdv,
			linkText: "Acessar repositório",
			link: "https://github.com/GMaiaa/ProjetoPDV",
		},

		{
			title: "Projeto 3 - Quitanda Frescor",
			description:
				"Um sistema para gerenciar pedidos e o controle de estoque de um hortifrúti. O sistema possui duas áreas principais: uma interface para clientes realizarem pedidos e um painel administrativo exclusivo para usuários com permissões de admin, permitindo o gerenciamento completo.",
			logo: quitanda,
			linkText: "Acessar repositório",
			link: "https://github.com/GMaiaa/projetointerdisciplinar",
		},

		{
			title: "Projeto 4 - Adopet",
			description:
				"O Adopet é um sistema desenvolvido para facilitar o processo de adoção de animais. A plataforma permite que usuários visualizem pets disponíveis para adoção com suas respectivas informações e entrem em contato para demonstrar interesse. Além disso, conta com uma área administrativa para cadastro, atualização e remoção de animais. Este projeto teve como foco a criação de uma solução socialmente relevante, utilizando conceitos de CRUD, organização de dados e usabilidade.",
			logo: adopet,
			linkText: "Acessar repositório",
			link: "https://github.com/yuriTakamisawaRibeiro/AdoPet",
		},

		{
			title: "Project 5 - AirBall",
			description:
				"O Airball é um aplicativo mobile criado com o objetivo de promover o basquete no Brasil, facilitando a organização de partidas entre jogadores da região. Desenvolvido com React Native e integração com ORM para gerenciamento de dados, o sistema permite que os usuários criem, encontrem e participem de jogos, além de visualizar detalhes como local, horário e participantes. Este projeto uniu propósito social com prática técnica, explorando o desenvolvimento mobile, persistência de dados e design de interfaces intuitivas.",
			logo: airball,
			linkText: "Acessar repositório",
			link: "https://github.com/GMaiaa/airball",
		},

		{
			title: "Projeto 6",
			description:
				"Em construção...",
			logo: loading,
			linkText: "Acessar repositório",
			link: "https://github.com/GMaiaa",
		},
	],
};

export default INFO;
