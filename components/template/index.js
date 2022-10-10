import Link from "next/link";

import { IoLogoGithub } from "react-icons/io5";
import Navbar from "../navbar";

function Template({ children }) {
  return (
    <div className="max-w-7xl m-auto px-3.5 sm:px-5">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      {children}

      {/* GAP */}
      <div className="h-10"></div>
    </div>
  );
}

export default Template;
