import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPen, faCog, faVial } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className="min-h-screen bg-[#F4E3D3]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)' }}
        >
          <source src="/MIT ADT Campus Tour 2020-vmake.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Welcome to MIT-ADT</h1>
            <p className="text-xl mb-8">Empowering Education, Inspiring Innovation</p>
            <Link
              to="/courses"
              className="bg-[#d38e45] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#C76D50] transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Options Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#5e3b22] mb-12">Quick Options</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#5e3b22]">Development</h3>
            <FontAwesomeIcon icon={faCode} className="text-4xl text-[#d38e45] mb-4" />
            <p className="text-gray-600">Explore our programming courses</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#5e3b22]">Design</h3>
            <FontAwesomeIcon icon={faPen} className="text-4xl text-[#d38e45] mb-4" />
            <p className="text-gray-600">Learn design principles</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#5e3b22]">Software</h3>
            <FontAwesomeIcon icon={faCog} className="text-4xl text-[#d38e45] mb-4" />
            <p className="text-gray-600">Master software engineering</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#5e3b22]">Science</h3>
            <FontAwesomeIcon icon={faVial} className="text-4xl text-[#d38e45] mb-4" />
            <p className="text-gray-600">Discover scientific concepts</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home