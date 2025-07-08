import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <div className="ME bg-gray-200 rounded-t-4xl">
        {/* Navbar */}
        <div className="Navbar flex justify-between items-center p-4">
          <div className="text-xl font-bold">RRPS</div>
          <nav className="w-full">
            <ul className="flex justify-center space-x-8 font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-orange-400 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="hover:text-orange-400 hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="hover:text-orange-400 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Info Section */}
        <div className="info py-16 px-4 flex flex-col lg:flex-row justify-between items-center lg:px-20">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Hi! I'm <br /> Ratnesh Singh
            </h1>
            <h3 className="py-3 font-medium">A professional PWD Contractor.</h3>
            <p className="py-3 text-gray-600">
              As a contractor in the PWD, I focus on ensuring quality
              construction, meeting deadlines, and adhering to strict safety
              standards. Every project is a challenge, but delivering efficient,
              durable infrastructure feels rewarding.
            </p>
            <a href="https://mail.google.com" target="_blank">
              <button className="ui-btn p-4 py-2 bg-orange-400 text-white font-mono text-lg font-semibold border-none cursor-pointer shadow-lg hover:bg-orange-500 hover:text-black transition-all duration-300">
                <span className="relative">Let's Talk</span>
              </button>{" "}
            </a>
            <div className="flex justify-center lg:justify-start space-x-6 mt-6">
              <div>Check Out My </div>
              <a
                href="https://www.instagram.com/ranaratneshpratapsingh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-black text-3xl transition-colors duration-300"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 py-2 mt-8 lg:mt-0 lg:ml-8">
            <img
              src="./image.png"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              alt="Ratnesh Singh"
            />
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="-mt-24 pt-0 px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-800 text-white w-full p-6 rounded-lg shadow-md">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-bold text-3xl mb-3">Meet My Recent Clients</h1>
            <p className="text-lg">
              As a PWD contractor, my clients value quality, trust, and timely
              delivery. <br />
              From infrastructure projects to road repairs, I ensure every
              project meets high standards and exceeds expectations.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start space-x-8 mt-4 lg:mt-0">
            <a href="#">
              <div className="client-name hover:text-orange-400 cursor-pointer transition-colors duration-300">
                City Roads Corporation
              </div>
            </a>
            <a href="#">
              <div className="client-name hover:text-orange-400 cursor-pointer transition-colors duration-300">
                Skyline Builders
              </div>
            </a>
            <a href="#">
              <div className="client-name hover:text-orange-400 cursor-pointer transition-colors duration-300">
                Horizon Civil Works
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 px-6 lg:px-20 pb-16">
        <div className="flex-1 max-w-2xl text-center lg:text-left lg:mr-8">
          <p className="text-orange-400 text-left mb-2">Best Services</p>
          <h1 className="text-3xl font-bold mb-4">What Can I Do For You?</h1>
          <p className="text-gray-600 mb-8">
            As a professional PWD contractor, I specialize in delivering
            high-quality public works projects. From road construction and
            repair to infrastructure development, I offer timely, reliable, and
            cost-effective solutions tailored to your needs. Whether it’s a
            large-scale government project or local road improvements, my team
            and I ensure durability, safety, and sustainability in every task we
            undertake.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold">3460+</h1>
              <p>Satisfied clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold">1458+</h1>
              <p>Projects Done</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold">15+</h1>
              <p>Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold">100%</h1>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="flex-1 max-w-2xl mt-8 lg:mt-0 bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4">Road Construction</h2>
              <p className="text-gray-700">
                We specialize in the construction of durable and safe roads,
                ensuring top-notch infrastructure that can withstand heavy
                traffic and adverse weather conditions.
              </p>
            </div>

            <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4">
                Bridge and Flyover Construction
              </h2>
              <p className="text-gray-700">
                Our team builds robust bridges and flyovers with precision
                engineering to ensure long-lasting, safe, and smooth traffic
                flow for both urban and rural areas.
              </p>
            </div>
            <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4">
                Public Infrastructure Development
              </h2>
              <p className="text-gray-700">
                From park developments to municipal infrastructure, we deliver
                public spaces and essential services with a focus on
                sustainability, efficiency, and community well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Experiences Section */}
      <div className="bg-gray-800 py-16 px-6 text-center text-white">
        <h1 className="font-medium text-orange-400">SKILLS/EXPERIENCES</h1>
        <h1 className="text-4xl font-bold mb-4 pt-5">
          Check My Skills And Work Experiences
        </h1>
        <p>
          With 10+ years in PWD, I deliver high-quality infrastructure projects.
        </p>
        <p>
          {" "}
          Skilled in project management, site supervision, and client
          communication.
        </p>

        {/* Skills & Experiences Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center mt-8">
          <div className="flex-1 max-w-2xl text-center lg:text-left lg:mr-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Skills</h1>
            <p className="text-gray-300 mb-8 text-center">
              With years of hands-on experience, I have developed a strong skill
              set in construction, project management, and client relations,
              ensuring every project is completed efficiently and to the highest
              standards.
            </p>
            <ul className="list-disc list-inside text-left space-y-2 text-orange-400">
              <li>Road Construction & Maintenance</li>
              <li>Bridge & Flyover Design</li>
              <li>Project Management & Planning</li>
              <li>Safety Compliance & Quality Control</li>
            </ul>
          </div>

          <div className="flex-1 max-w-2xl mt-8 lg:mt-0 p-6 ">
            <h1 className="text-3xl font-bold mb-4 text-white">Experiences</h1>
            <p className="text-gray-300 mb-8">
              With years of experience in public works, I’ve successfully led
              numerous projects, ensuring they meet both deadlines and quality
              standards while maintaining safety and efficiency.
            </p>
            <ul className="list-disc list-inside text-left space-y-2 text-orange-400">
              <li>
                Lead Contractor - National Highway Construction (2020-2023)
              </li>
              <li>
                Project Manager - Bridge Design and Development (2018-2020)
              </li>
              <li>
                Site Supervisor - Urban Infrastructure Projects (2016-2018)
              </li>
              <li>
                Construction Coordinator - Municipal Road Repairs (2014-2016)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer flex justify-between items-center p-6 mt-8">
        <div className="flex-1 text-left p-4">
          <p className="text-black text-sm">
            © 2023 Ratnesh Singh. All rights reserved.
          </p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-black text-sm">Contact Developer: </p>
          <div className="flex justify-end space-x-4">
            <a
              href="https://www.instagram.com/the._anoop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-colors duration-300"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-black text-3xl transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
