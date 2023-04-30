import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[32px] font-bold leading-tight text-[#333333] md:text-[56px]">
            Jasa Convert Pulsa yang Dipercaya Jutaan Customer Sejak 2010.
          </h1>
          <p className="mt-4 text-[#666666]">
            Punya Pulsa Berlebih Tapi Nggak Dipakai? Tukar Pulsa Kamu Jadi Uang
            / Saldo eWallet hanya dalam hitungan menit di Viapulsa!
          </p>
          <button className="btn btn-primary mt-4">
            Convert Pulsa Sekarang!
          </button>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-center md:justify-end">
            <img className="w-[80%]" src="./hero1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
