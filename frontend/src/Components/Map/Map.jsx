import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import stateCulturalData from '../../assets/Culturalinfo';
import './Map.css'; 

const IndiaMap = () => {
  const [indiaGeoJSON, setIndiaGeoJSON] = useState(null);
  const mapRef = useRef(null);
  const popupRefs = useRef({});
  const selectedLayer = useRef(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.features) {
          setIndiaGeoJSON(data);
          if (mapRef.current) {
            const bounds = L.geoJSON(data).getBounds();
            mapRef.current.fitBounds(bounds);
          }
        }
      })
      .catch(console.error);
  }, []);

  const geoJsonStyle = (feature) => ({
    color: "#222",
    weight: 1.5,
    fillColor: getColor(feature),
    fillOpacity: 0.8,
  });

  const getColor = (feature) => {
    if (!feature) return "#7fa8d3";
    const name = feature.properties.NAME_1 || "";
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  const onEachFeature = (feature, layer) => {
    const stateName = feature.properties?.NAME_1;

    if (stateName) {
      layer.bindTooltip(stateName, { 
        permanent: false, 
        direction: "auto",
        className: "map-tooltip"
      });

      layer.on("mouseover", () => {
        layer.setStyle({ fillColor: "#ff5733", fillOpacity: 1 });
      });

      layer.on("mouseout", () => {
        layer.setStyle(geoJsonStyle(feature));
      });

      layer.on("click", () => {
        if (popupRefs.current[stateName]) {
          clearInterval(popupRefs.current[stateName]);
          delete popupRefs.current[stateName];
        }

        if (selectedLayer.current) {
          selectedLayer.current.setStyle(geoJsonStyle(selectedLayer.current.feature));
        }

        selectedLayer.current = layer;
        mapRef.current.setView(layer.getBounds().getCenter(), 6);

        const culturalInfo = stateCulturalData[stateName] || stateCulturalData["default"];
        
        const popupContent = `
          <div class="cultural-popup">
            <h3>${stateName}</h3>
            <div class="popup-scroll">
              <p>${culturalInfo.description}</p>
            </div>
            <div id="slideshow-${stateName.replace(/\s+/g, '-')}" class="slideshow-container">
              ${culturalInfo.images.map((img, index) => `
                <img 
                  src="${img}" 
                  alt="${stateName} culture ${index + 1}" 
                  class="slide-image ${index === 0 ? 'active' : ''}"
                />
              `).join('')}
            </div>
          </div>
        `;
        
        const popup = layer.bindPopup(popupContent, {
          maxWidth: 350,
          minWidth: 300,
          className: "custom-popup"
        }).openPopup();

        setTimeout(() => {
          const container = document.getElementById(`slideshow-${stateName.replace(/\s+/g, '-')}`);
          if (container && culturalInfo.images.length > 1) {
            const images = container.getElementsByClassName('slide-image');
            let currentIndex = 0;
            
            const intervalId = setInterval(() => {
              images[currentIndex].classList.remove('active');
              currentIndex = (currentIndex + 1) % images.length;
              images[currentIndex].classList.add('active');
            }, 2000);

            popupRefs.current[stateName] = intervalId;
          }
        }, 50);
      });
    }
  };

  useEffect(() => {
    return () => {
      Object.values(popupRefs.current).forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="map-wrapper">
      <button className="reset-btn" onClick={() => mapRef.current.setView([23.5937, 78.9629], 4)}>Reset View</button>
      
      <MapContainer
        ref={mapRef}
        className="india-map-container"
        zoom={5}
        minZoom={4.3}
        maxZoom={6}
        scrollWheelZoom={false}
        center={[20.5937, 78.9629]}
        attributionControl={false}
      >
        <TileLayer 
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          opacity={0.3}
        />

        {indiaGeoJSON && (
          <GeoJSON
            data={indiaGeoJSON}
            style={geoJsonStyle}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
