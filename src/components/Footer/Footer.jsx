import { Link } from "react-router-dom";

import { usefulLink, tutorialConvertLink } from "../../copywritting";

import Logo from "../../assets/viapulsa-logo.png";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaGooglePlay,
  FaApple,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-neutral-100 px-6 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* 
          Footer Main
        */}
        {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"> */}
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="w-full md:max-w-max">
            <div className="flex flex-col space-y-4 text-center md:text-start">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Viapulsa"
                  className="mx-auto h-14 md:mx-0"
                />
              </Link>
              <div className="flex gap-1 text-neutral-500">
                <address className="not-italic">
                  Jl. Semeru No. 4, Pangongangan, Kec. Manguharjo, Kota Madiun,
                  Jawa Timur 63121
                </address>
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-max">
            <div className="flex flex-col space-y-4">
              <h3 className="text-center text-2xl font-bold text-[#F98127] md:text-start">
                Tentang Viapulsa
              </h3>
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                {usefulLink.map((item) => (
                  <li
                    key={item.index}
                    className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900"
                  >
                    <MdKeyboardArrowRight className="text-[#F98127]" />
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:max-w-max">
            <div className="flex flex-col space-y-4">
              <h3 className="text-center text-2xl font-bold text-[#F98127] md:text-start">
                Panduan Convert
              </h3>
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                {tutorialConvertLink.map((item) => (
                  <li
                    key={item.index}
                    className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900"
                  >
                    <MdKeyboardArrowRight className="text-[#F98127]" />
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:max-w-max">
            <div className="flex flex-col space-y-4">
              <h3 className="text-center text-2xl font-bold text-[#F98127] md:text-start">
                Download Aplikasi
              </h3>
              <div className="flex items-center justify-between gap-2">
                <Link
                  to="https://apps.apple.com/id/app/viapulsa/id1605901459?l=id&platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-fit flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white"
                >
                  <FaApple className="h-8 w-8" />
                  <div className="flex flex-col items-start justify-center text-lg font-bold leading-tight">
                    <span className="text-xs font-normal leading-none opacity-95">
                      Download on the
                    </span>
                    Apple Store
                  </div>
                </Link>
                <Link
                  to="https://play.google.com/store/apps/details?id=com.viapulsa.app&hl=in&gl=US&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-fit flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white"
                >
                  <FaGooglePlay className="h-8 w-8" />
                  <div className="flex flex-col items-start justify-center text-lg font-bold leading-tight">
                    <span className="text-xs font-normal leading-none opacity-95">
                      Get it on
                    </span>
                    Google Play
                  </div>
                </Link>
                {/* <Link
                  to="https://viapulsa.whasap.me/convertpulsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-fit flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-white"
                >
                  <FaWhatsapp className="h-8 w-8" />
                  <div className="flex flex-col items-start justify-center text-lg font-bold leading-tight">
                    <span className="text-xs font-normal leading-none opacity-95">
                      Chat via
                    </span>
                    WhatsApp
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* 
          Footer Bottom
        */}
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
