import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const IndiaMap = () => {
  const [indiaGeoJSON, setIndiaGeoJSON] = useState(null);
  const mapRef = useRef(null); // Ref for the map to adjust zoom dynamically

  useEffect(() => {
    // Fetch India’s outer boundary GeoJSON
    fetch("https://raw.githubusercontent.com/johan/world.geo.json/master/countries/IND.geo.json")
      .then((response) => response.json())
      .then((data) => {
        setIndiaGeoJSON(data);
        if (mapRef.current) {
          const bounds = data.features[0].geometry.coordinates[0].map(coord => [coord[1], coord[0]]);
          mapRef.current.fitBounds(bounds); // Auto-fit map to India's shape
        }
      })
      .catch((error) => console.error("Error loading India GeoJSON:", error));
  }, []);

  // Style for India's boundary
  const geoJsonStyle = {
    color: "green", // Border color
    weight: 2, // Border thickness
    fillOpacity: 0, // No fill color
  };

  return (
    <MapContainer
      ref={mapRef}
      style={{ height: "600px", width: "100%", background: "transparent" }} // Transparent background
      zoom={5} 
      scrollWheelZoom={false} // Disable zooming with mouse scroll
    >
      {/* Hide base map if only boundary is needed */}
      {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

      {/* Render India's boundary */}
      {indiaGeoJSON && <GeoJSON data={indiaGeoJSON} style={geoJsonStyle} />}
    </MapContainer>
  );
};

export default IndiaMap;