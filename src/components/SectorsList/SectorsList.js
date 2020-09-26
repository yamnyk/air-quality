import React from 'react';
import './SectorsList.scss'

const SectorsList = ({title, subtitle, items}) => {
	const itemsList = items.map((sector, i) => <div className="sectors-list-item" style={{
		background: `utl(${sector.imgUrl}) center no-repeat / cover`
	}}>
		<p className="sectors-item-name">
			{sector.name}
		</p>
		<p className="sectors-item-tooltip">
			{sector.description}
		</p>
	</div>)
	
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