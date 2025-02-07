import Navbar from './Components/Navbar/Navbar'
import Map from './Components/Map/Map'
import './App.css'
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix missing marker icons in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Map />
    </div>
  )
}

export default App
