import React from 'react';
import './SectorsList.scss'
import SectorItem from "./SectorItem";

const SectorsList = ({title, subtitle, items}) => {
	const itemsList = items.map((sector, i) => <SectorItem sector={sector} number={i+1} key={i}/>)
	
	return (
		<section className="sectors container">
			<h2 className="sectors-title">{title}</h2>
			<p className="sectors-subtitle">{subtitle}</p>
			<div className="sectors-list">
				{itemsList}
			</div>
		</section>
	);
};

export default SectorsList;