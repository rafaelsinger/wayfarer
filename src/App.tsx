import Globe from 'react-globe.gl'
import countriesGeoJson from './data/countries'
import './App.css'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        polygonsData={countriesGeoJson.features}
        polygonAltitude={0.01}
        polygonCapColor={() => 'rgba(200, 200, 200, 0.9)'}
        polygonSideColor={() => 'rgba(150, 150, 150, 0.8)'}
        polygonStrokeColor={() => '#111'}
      />
    </div>
  )
}

export default App
