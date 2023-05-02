import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-neutral-100 px-6 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            optio atque blanditiis omnis hic voluptates voluptatum dolor porro
            ducimus libero. Dicta voluptates facere deserunt.
          </div>
          <div className="border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            optio atque blanditiis omnis hic voluptates voluptatum dolor porro
            ducimus libero. Dicta voluptates facere deserunt.
          </div>
          <div className="border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            optio atque blanditiis omnis hic voluptates voluptatum dolor porro
            ducimus libero. Dicta voluptates facere deserunt.
          </div>
          <div className="border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            optio atque blanditiis omnis hic voluptates voluptatum dolor porro
            ducimus libero. Dicta voluptates facere deserunt.
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-6 border-t py-6 md:flex-row md:items-center md:justify-between">
          <span className="text-center text-neutral-500 md:text-start">
            Copyright &copy; 2022 – PT. Viapulsa Global Indonesia
          </span>
          <div className="flex items-center justify-center gap-2">
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="rounded-md bg-neutral-200 p-[6px] text-3xl transition hover:scale-110 hover:bg-neutral-800 hover:text-white" />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="rounded-md bg-neutral-200 p-[6px] text-3xl transition hover:scale-110 hover:bg-neutral-800 hover:text-white" />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="rounded-md bg-neutral-200 p-[6px] text-3xl transition hover:scale-110 hover:bg-neutral-800 hover:text-white" />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="rounded-md bg-neutral-200 p-[6px] text-3xl transition hover:scale-110 hover:bg-neutral-800 hover:text-white" />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="rounded-md bg-neutral-200 p-[6px] text-3xl transition hover:scale-110 hover:bg-neutral-800 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
