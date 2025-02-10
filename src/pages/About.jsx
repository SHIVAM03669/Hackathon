import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUserGraduate, faChalkboardUser, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div className="bg-light min-h-screen py-16">
      <div className="container mx-auto px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-dark text-center mb-8">About MIT-ADT</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/images/about-img.svg" alt="About MIT-ADT" className="w-full rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">Why Choose Us?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                MIT-ADT University is committed to providing world-class education through innovative teaching methods,
                industry collaborations, and a focus on holistic development. Our state-of-the-art facilities and
                experienced faculty ensure that students receive the best possible education to prepare them for their future careers.
              </p>
              <button className="btn">Explore Our Courses</button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-bold text-dark">10,000+</h3>
            <p className="text-gray-600">Online Courses</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faUserGraduate} className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-bold text-dark">40,000+</h3>
            <p className="text-gray-600">Students</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faChalkboardUser} className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-bold text-dark">2,000+</h3>
            <p className="text-gray-600">Expert Faculty</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-bold text-dark">100%</h3>
            <p className="text-gray-600">Placement Rate</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About