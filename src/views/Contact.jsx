const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-4">We'd love to hear from you! Please fill out the form below to get in touch.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8">
         
          <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/3 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://scontent.fsal14-1.fna.fbcdn.net/v/t39.30808-6/417451238_812208387403569_3544913740199533064_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4q7XJlhAWb0Q7kNvgFssMSs&_nc_zt=23&_nc_ht=scontent.fsal14-1.fna&_nc_gid=AF601594xCFkKfABeq7ZwC-&oh=00_AYDCy06rutuyFwWAdtzPcGDDLoGV18BZF423qfs810Nx6w&oe=67524C69"
              alt="Profile"
            />
            <h3 className="text-xl font-semibold text-gray-800">Madai Pérez</h3>
            <p className="text-gray-500">Ingeniero en sistemas</p>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Contactar
              </a>
              <a
                href="#"
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Ver Perfil
              </a>
            </div>
          </div>

         
          <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we assist you?"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
