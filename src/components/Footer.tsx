import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Name and Tagline */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">Arjun Nepali</h2>
          <p className="text-sm text-gray-400">Passionate Developer • Portfolio 2025</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/Arrjoon" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaGithub />
          </a>
          <a href="https://www.https://www.linkedin.com/in/arjun-nepali-32b876244/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="mailto:nepaliarjun049@gmail.com" className="hover:text-red-400">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Arjun Nepali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
