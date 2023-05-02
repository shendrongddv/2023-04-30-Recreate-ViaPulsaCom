import { Link } from "react-router-dom";

import { usefulLink, tutorialConvertLink } from "../../copywritting";

import { FaLinkedinIn, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-neutral-100 px-6 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            optio atque blanditiis omnis hic voluptates voluptatum dolor porro
            ducimus libero. Dicta voluptates facere deserunt.
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-[#F98127]">
              Tentang Viapulsa
            </h3>
            <ul className="flex flex-col space-y-2">
              {usefulLink.map((item) => (
                <li key={item.index}>
                  <Link
                    to={item.url}
                    className="text-neutral-500 hover:text-neutral-900"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-[#F98127]">Panduan</h3>
            <ul className="flex flex-col space-y-2">
              {tutorialConvertLink.map((item) => (
                <li key={item.index}>
                  <Link
                    to={item.url}
                    className="text-neutral-500 hover:text-neutral-900"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-[#F98127]">
              Download Aplikasi
            </h3>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam optio atque blanditiis omnis hic voluptates voluptatum
              dolor porro ducimus libero. Dicta voluptates facere deserunt.
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-8 border-t py-8 md:flex-row md:items-center md:justify-between">
          <span className="text-center text-sm text-neutral-500 md:text-start md:text-base">
            Copyright &copy; 2022 –{" "}
            <Link to="/">PT. Viapulsa Global Indonesia</Link>
          </span>
          <div className="flex items-center justify-center gap-4">
            {/* {socialMediaLink.map((item) => (
              <Link
                key={item.index}
                to={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-900 transition hover:scale-110 hover:bg-neutral-900 hover:text-neutral-100 hover:shadow-md"
              >
                <{item.icon} className="group-hover:scale-110" />
              </Link>
            ))} */}

            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-900 transition hover:scale-110 hover:bg-neutral-900 hover:text-neutral-100 hover:shadow-md"
            >
              <FaTiktok className="group-hover:scale-110" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-900 transition hover:scale-110 hover:bg-neutral-900 hover:text-neutral-100 hover:shadow-md"
            >
              <RiInstagramFill className="group-hover:scale-110" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-900 transition hover:scale-110 hover:bg-neutral-900 hover:text-neutral-100 hover:shadow-md"
            >
              <FaYoutube className="group-hover:scale-110" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-900 transition hover:scale-110 hover:bg-neutral-900 hover:text-neutral-100 hover:shadow-md"
            >
              <FaLinkedinIn className="group-hover:scale-110" />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-900 transition hover:scale-110 hover:bg-neutral-900 hover:text-neutral-100 hover:shadow-md"
            >
              <FaFacebookF className="group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
