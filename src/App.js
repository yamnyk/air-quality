import React from 'react';
import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import gcLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_emozhl_logo.svg';

function App() {
	const partners = [
		shidLogo,
		ITNLogo,
		gcLogo
	]
	const navLinks = [
		{
			title: "Основные факты",
			href: "#facts"
		},
		{
			title: "Индекс качества воздуха",
			href: "#quality"
		},
		{
			title: "Политика по уменьшению загрязнений",
			href: "#politics"
		}
	]
	
	return (
		<>
			<HeroBlock title="Качество атмосферного воздуха и здоровье"
								 logos={partners}
								 links={navLinks}/>
		</>
	);
}

export default App;
