import React, {useState} from 'react';

const SectorItem = ({sector}) => {
	const [isToolTipShowing, setToolTipShowing] = useState(false);
	const toggleToolTip = (newValue) => {
		
		setToolTipShowing(newValue);
	}
	// const toggleToolTip = () => {
	// 	setToolTipShowing(
	// 		!isToolTipShowing
	// 	)
	// }
	
	return (
		<div className="sectors-list-item"
				 onMouseEnter={() => setToolTipShowing(true)}
				 onMouseLeave={() => setToolTipShowing(false)}
				 style={{
					 background: `url(${sector.imgUrl}) center no-repeat`,
					 backgroundSize: 'cover'
				 }}>
			<p className="sectors-list-item-name">
				{sector.name}
			</p>
			{
				isToolTipShowing && <p className="sectors-list-item-tooltip">
					{sector.description}
				</p>
			}
		</div>
	);
};

export default SectorItem;