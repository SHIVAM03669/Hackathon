import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-light min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-dark text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-dark mb-6">Get in Touch</h2>
              
              <div className="mb-4">
                <label className="block text-dark mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-dark mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-dark mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-dark mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input h-32 resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FontAwesomeIcon icon={faPhone} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-dark mb-2">Phone</h3>
              <p className="text-gray-600">+91 123-456-7890</p>
              <p className="text-gray-600">+91 098-765-4321</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-dark mb-2">Email</h3>
              <p className="text-gray-600">info@mitadt.edu</p>
              <p className="text-gray-600">admissions@mitadt.edu</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-dark mb-2">Address</h3>
              <p className="text-gray-600">
                MIT-ADT University Campus,
                <br />
                Rajbaug, Loni Kalbhor,
                <br />
                Pune - 412201, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact