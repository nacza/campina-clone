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

      {/* Footer */}
      <div className="mt-10">
        <div className="flex justify-center items-center text-slate-500">
          <p className="text-sm md:text-md lg:text-base">Created by natczh</p>
          <div className="mx-1"></div>
          <Link href="http://github.com/natczh">
            <a target="_blank">
              <IoLogoGithub className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 " />
            </a>
          </Link>
        </div>
      </div>

      {/* GAP */}
      <div className="h-10"></div>
    </div>
  );
}

export default Template;
