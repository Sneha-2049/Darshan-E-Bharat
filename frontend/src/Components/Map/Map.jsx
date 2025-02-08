import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for bounds calculation
import "leaflet/dist/leaflet.css";

const IndiaMap = () => {
  const [indiaGeoJSON, setIndiaGeoJSON] = useState(null);
  const mapRef = useRef(null); // Ref for the map to adjust zoom dynamically

  useEffect(() => {
    // Fetch India’s detailed GeoJSON (including states and internal boundaries)
    fetch("https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson") // Reliable source for India's states
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Inspect the GeoJSON data
        data.features.forEach((feature, index) => {
          console.log(`Feature ${index}:`, feature.geometry); // Log each feature's geometry
        });
        setIndiaGeoJSON(data);

        // Calculate bounds from GeoJSON and fit the map to those bounds
        if (mapRef.current && data.features) {
          const bounds = L.geoJSON(data).getBounds(); // Use Leaflet to calculate bounds
          mapRef.current.fitBounds(bounds); // Fit the map to the bounds
        }
      })
      .catch((error) => console.error("Error loading India GeoJSON:", error));
  }, []);

  // Style for India's boundary and internal regions
  const geoJsonStyle = {
    color: "green", // Border color
    weight: 1, // Border thickness
    fillColor: "lightgreen", // Fill color for internal regions
    fillOpacity: 0.5, // Fill opacity
  };

  // Function to apply styles dynamically (optional)
  const onEachFeature = (feature, layer) => {
    // You can add interactivity or custom styles here
    if (feature.properties && feature.properties.name) {
      layer.bindTooltip(feature.properties.name); // Display state names as tooltips
    }
  };

  return (
    <MapContainer
      ref={mapRef}
      style={{ height: "600px", width: "100%", background: "transparent" }} // Transparent background
      zoom={5}
      scrollWheelZoom={false} // Disable zooming with mouse scroll
      center={[20.5937, 78.9629]} // Default center (India)
    >
      {/* Hide base map if only India's map is needed */}
      {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

      {/* Render India's boundary and internal regions */}
      {indiaGeoJSON && (
        <GeoJSON
          data={indiaGeoJSON}
          style={geoJsonStyle}
          onEachFeature={onEachFeature} // Optional: Add interactivity
        />
      )}
    </MapContainer>
  );
};

export default IndiaMap;