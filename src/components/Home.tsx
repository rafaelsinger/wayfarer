import { useEffect, useRef, useState } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import countriesGeoJson from '../data/countries'
import { center } from '@turf/turf'

const Home = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined)
  const [hoverD, setHoverD] = useState()
  const [searchQuery, setSearchQuery] = useState('')
  const [autoRotate, setAutoRotate] = useState(true)

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().enableZoom = true
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 0.2
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
    }
  }, [])

  // Handle country search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const searchTerm = searchQuery.toLowerCase()
    const country = countriesGeoJson.features.find(
      feature => feature.properties.ADMIN.toLowerCase().includes(searchTerm) ||
                 feature.properties.ISO_A2.toLowerCase().includes(searchTerm)
    )

    if (country && globeEl.current) {
        // Calculate the center point of the country's geometry
        const centerPoint = center(country.geometry)
        const [lng, lat] = centerPoint.geometry.coordinates
        
        globeEl.current.pointOfView({
          lat,
          lng,
          altitude: 1.5
        }, 1000)
      }
  }

  // Handle hover effects
  const handleHover = (polygon: any) => {
    setHoverD(polygon)
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = polygon === null && autoRotate
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      <nav className="p-6 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Wayfarer</h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="w-72">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a country..."
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-white/50 focus:outline-none focus:border-warning"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                🔍
              </button>
            </div>
          </form>

          {/* Auto-rotate toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`text-white px-4 py-2 rounded-lg border border-white/20 
                     ${autoRotate ? 'bg-white/10' : 'bg-transparent'}`}
          >
            {autoRotate ? '🌎 Rotating' : '⏸️ Paused'}
          </button>
        </div>
      </nav>

      <div className="absolute inset-0 flex items-center justify-center">
      <Globe
          ref={globeEl}
          width={1000}
          height={1000}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          polygonsData={countriesGeoJson.features}
          polygonAltitude={0.01}
          polygonCapColor={d => d === hoverD ? '#60A5FA' : '#929fb3'}  // Base color
          polygonSideColor={d => d === hoverD ? '#60A5FA' : '#1F2937'} // Side color
          polygonStrokeColor={d => d === hoverD ? '#60A5FA' : '#4B5563'} // Stroke color
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#4B5563"
          onPolygonHover={handleHover}
        />
      </div>
    </div>
  )
}

export default Home