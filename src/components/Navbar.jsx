// import logo from "../assets/QasimKhanLogo.png";
// import {FaLinkedin, FaGithub} from "react-icons/fa";
// const Navbar = () => {
//   return <nav className="mb-20 flex items-center justify-betwen py-6">
//     <div className="flex-shrink-0 items-center">
//         <img src={logo} alt ="logo" />
//     </div>
//     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin />
//         <FaGithub  />
//     </div>
//   </nav>
// };

// export default Navbar



import logo from "../assets/QasimKhanLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-3">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="mx-2 h-12 w-auto" />
      </div>
      
      {/* Icons Section */}
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/qasim-khan-/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/QasimKhan30"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
