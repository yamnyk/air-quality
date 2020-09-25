import React from 'react';
import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import Facts from './components/Facts/Facts';
import gcLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_emozhl_logo.svg';

function App() {
	const partners = [
		shidLogo,
		ITNLogo,
		gcLogo
	];
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
	];
	const factsSlides = [
		{
			id: '1332',
			imgUrl: require("./assets/facts-slider/slide-1.jpg"),
			desc: "Женщины и дети – главные жертвы загрязнения воздуха"
		},
		{
			id: '1333',
			imgUrl: require("./assets/facts-slider/slide-2.jpg"),
			desc: "Защитники окружающей среды подвергаются преследованиям"
		},
		{
			id: '1334',
			imgUrl: require("./assets/facts-slider/slide-3.jpg"),
			desc: "Загрязнение воздуха – нарушение прав человека"
		},
		{
			id: '1335',
			imgUrl: require("./assets/facts-slider/slide-4.jpg"),
			desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения \n" +
				"атмосферного воздуха"
		},
		{
			id: '1336',
			imgUrl: require("./assets/facts-slider/slide-5.jpg"),
			desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
		}
	];
	
	return (
		<>
			<HeroBlock title="Качество атмосферного воздуха и здоровье"
								 logos={partners}
								 links={navLinks}/>
			<Facts title="Основные факты" slides={factsSlides}/>
		</>
	);
}

export default App;
