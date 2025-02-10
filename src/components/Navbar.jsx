import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUser, faSun } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#5e3b22]">MIT-ADT SOC</Link>

        <div className="flex items-center gap-4">
          {isSearchOpen && (
            <form className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="py-2 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#d38e45]"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          )}

          <div className="flex gap-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <FontAwesomeIcon icon={faSearch} className="text-xl" />
            </button>
            <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <FontAwesomeIcon icon={faUser} className="text-xl" />
            </button>
            <FontAwesomeIcon icon={faSun} className="text-xl cursor-pointer" />
            <FontAwesomeIcon icon={faBars} className="text-xl cursor-pointer md:hidden" />
          </div>
        </div>

        {isProfileOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-64">
            <div className="text-center">
              <img src="/images/pic-1.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="font-semibold">Guest User</h3>
              <p className="text-gray-600 text-sm">Student</p>
              <Link to="/profile" className="block mt-2 bg-[#d38e45] text-white py-1 px-4 rounded">
                View Profile
              </Link>
              <div className="flex gap-2 mt-2">
                <Link to="/login" className="flex-1 bg-gray-200 py-1 px-2 rounded">Login</Link>
                <Link to="/signup" className="flex-1 bg-gray-200 py-1 px-2 rounded">Register</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar