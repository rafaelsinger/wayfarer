import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import countriesGeoJson from '../data/countries'

const Landing = () => {
    const globeEl = useRef<GlobeMethods | undefined>(undefined)
    const [hoverD, setHoverD] = useState()

    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.controls().enableZoom = false;
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.7;
        }
      }, []);
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary overflow-auto">
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Wayfarer</h1>
          <div className="space-x-4">
            <Link to="/login" className="text-white hover:text-warning transition">Login</Link>
            <Link to="/register" className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Discover Your Next
              <span className="text-warning block">Adventure</span>
            </h2>
            <p className="text-white/80 text-lg">
              Track your travels, connect with fellow adventurers, and explore the world like never before.
            </p>
            <div className="flex gap-4">
              <button className="bg-success hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition">
                Start Exploring
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-secondary transition">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative w-full h-[400px] bottom-[100px]">  {/* Reduced height */}
              <Globe
                ref={globeEl}
                width={600}       
                height={600}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                polygonsData={countriesGeoJson.features}
                // polygonAltitude={0.01}
                polygonAltitude={d => d === hoverD ? 0.12 : 0.06}
                polygonCapColor={d => d === hoverD ? 'steelblue' : 'rgba(255, 255, 255, 0.15))'}
                // polygonCapColor={() => 'rgba(255, 255, 255, 0.15)'}  // More subtle top color
                polygonSideColor={() => 'rgba(255, 255, 255, 0.1)'}  // Lighter side color
                polygonStrokeColor={() => 'rgba(255, 255, 255, 0.3)'} // More subtle stroke
                backgroundColor="rgba(0,0,0,0)"
                onPolygonHover={setHoverD}
                polygonsTransitionDuration={300}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌍",
              title: "Track Your Journeys",
              description: "Mark countries you've visited and plan future adventures."
            },
            {
              icon: "🤝",
              title: "Connect Globally",
              description: "Meet travelers and share experiences worldwide."
            },
            {
              icon: "📍",
              title: "Personal Travel Map",
              description: "Visualize your adventures on an interactive 3D globe."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:transform hover:scale-105 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Landing