import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 border">
          <div className="space-y-6 text-center md:text-start ">
            <h1 className="text-[32px] font-bold leading-tight text-[#333333] md:text-[56px]">
              Jasa Convert Pulsa yang Dipercaya Jutaan Customer Sejak 2010.
            </h1>
            <p className="text-[#666666]">
              Punya Pulsa Berlebih Tapi Nggak Dipakai? Tukar Pulsa Kamu Jadi
              Uang / Saldo eWallet hanya dalam hitungan menit di Viapulsa!
            </p>
            <Link to={"/"} className="w-auto rounded-full px-8 py-4 shadow">
              Convert Pulsa Sekarang!
            </Link>
          </div>
        </div>
        <div className="flex-1 border">
          <div className="flex items-center justify-center md:justify-end">
            <img className="w-[80%]" src="./hero1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
