import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary overflow-auto">
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">Wayfarer</Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Create Account</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2">Username</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-warning"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-warning"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-warning"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Confirm Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-warning"
                placeholder="Confirm your password"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-white/80 text-center mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-warning hover:text-opacity-80 transition">
              Sign in here
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Register
