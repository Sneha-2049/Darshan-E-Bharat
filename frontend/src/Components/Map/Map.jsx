import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet"; // Leaflet for bounds calculation
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported

const IndiaMap = () => {
  const [indiaGeoJSON, setIndiaGeoJSON] = useState(null);
  const mapRef = useRef(null); // Ref for controlling map zoom

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.features) {
          console.log("GeoJSON data loaded:", data); // Debugging
          setIndiaGeoJSON(data);
          if (mapRef.current) {
            const bounds = L.geoJSON(data).getBounds();
            mapRef.current.fitBounds(bounds); // Adjust zoom to fit India
          }
        } else {
          console.error("Invalid GeoJSON structure:", data);
        }
      })
      .catch((error) => console.error("Error loading India GeoJSON:", error));
  }, []);

  // ✅ Style for India's boundary & internal regions
  const geoJsonStyle = () => ({
    color: "black",       // Border color for states
    weight: 1.5,          // Slightly thicker border for visibility
    fillColor: "lightblue", // Visible fill color for regions
    fillOpacity: 0.8,     // Increased opacity for better visibility
  });

  // ✅ Tooltip & Click Event: Show state names
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.NAME_1) {
      // Tooltip on hover
      layer.bindTooltip(feature.properties.NAME_1, { permanent: false, direction: "auto" });

      // Click event: Popup with state name
      layer.on("click", () => {
        layer.bindPopup(`<b>${feature.properties.NAME_1}</b>`).openPopup();
      });
    }
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <MapContainer
        ref={mapRef}
        style={{ height: "100%", width: "100%", background: "transparent" }} // Transparent background
        zoom={5}
        scrollWheelZoom={false} // ❌ Scroll zoom disabled
        center={[20.5937, 78.9629]} // Centered on India
      >
        {/* Hide base map if only India's shape is needed */}
        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

        {/* Render India's boundary & internal states */}
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