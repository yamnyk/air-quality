import React, {useEffect, useState} from 'react';

const useScreenSize = () => {
	const [size, setSize] = useState({...window.screen})
	
	useEffect(() => {
		const handleResize = () => setSize({...window.screen});
		
		window.addEventListener('resize', handleResize);
		
		return window.removeEventListener('resize', handleResize);
	}, [])
	
	return size;
}

export default useScreenSize;