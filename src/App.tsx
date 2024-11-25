import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Globe from 'react-globe.gl'
import Landing from './components/Landing'
import countriesGeoJson from './data/countries'
import './App.css'

// Skeleton components
const Login = () => <div>Login Page</div>
const Register = () => <div>Register Page</div>

const Home = () => {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/globe" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App