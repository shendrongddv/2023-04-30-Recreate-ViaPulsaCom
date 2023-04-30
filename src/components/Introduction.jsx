import { Link } from "react-router-dom";
import assetsImg from "../assets/viapulsa-mobile-app-mask.png";
import assetsImg2 from "../assets/vp-logo-white.png";
import playStore from "../assets/gp-elipse-button.png";
import appleStore from "../assets/as-rounded-button.png";

const Introduction = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 text-center md:py-20">
      <div className="flex flex-col space-y-8">
        <p className="text-40 mx-auto w-full text-[#333333] md:w-1/2">
          Viapulsa membangun layanan tukar pulsa menjadi uang yang fair untuk
          semua orang
        </p>
        {/* -----#####----- */}
        <div className="mx-auto flex w-full flex-col gap-12 overflow-hidden rounded-2xl bg-gradient-to-b from-[#EB9821] to-[#D98425] text-white shadow-xl md:w-[90%] md:flex-row md:items-center md:justify-around md:px-28">
          <div className="flex flex-col items-center space-y-6 px-6 pt-8 md:items-start">
            <img className="h-10" src={assetsImg2} alt="" />
            <h2 className="font-bold">1Juta+ Download</h2>
            <p className="md:text-start">
              Download di Google Play Store atau Apple App Store
            </p>
            <div className="flex items-center justify-start gap-4">
              <Link
                to={"#"}
                className="rounded-full transition hover:shadow-md"
              >
                <img className="h-10 w-auto" src={playStore} alt="" />
              </Link>
              <Link
                to={"#"}
                className="rounded-full transition hover:shadow-md"
              >
                <img className="h-10 w-auto" src={appleStore} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center md:w-1/3">
            <img
              className="h-auto w-[80%] md:w-full md:pt-20"
              src={assetsImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
