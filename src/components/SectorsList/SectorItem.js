import React, {useState} from 'react';

const SectorItem = ({sector}) => {
	const [isToolTipShowing, setToolTipShowing] = useState(false);
	const toggleToolTip = () => {
		setToolTipShowing(
			!isToolTipShowing
		)
	}
	
	return (
		<div className="sectors-list-item"
				 onClick={toggleToolTip}
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