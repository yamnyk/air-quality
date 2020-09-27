import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFtbnlrIiwiYSI6ImNrZmxhZjZscjAwb2gycm54aWo2bGJvZnEifQ.BbYutmem-GZtYciYeMln1A';

const AirQuality = () => {
	const mapContainer = useRef(null);
	const [locationInfo, setLocationInfo] = useState({
		lng: 5,
		lat: 34,
		zoom: 2
	});
	
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom
		});
	}, [])
	
	return (
		<section className={'air-q'}>
			
			<div className="air-q-map" ref={mapContainer}/>
		</section>
	);
};

export default AirQuality;