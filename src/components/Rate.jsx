import sectionImg from "../assets/section/section-rate-img.png";
import { rateConvert } from "../copywritting";

const Rate = () => {
  return (
    <div className="bg-[#F5F5F5] px-6 py-20 md:py-28">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center space-y-8 md:items-start">
        <h2 className="text-center font-bold text-[#333333] md:text-start">
          Rate Convert Pulsa
        </h2>
        <div className="grid w-full grid-cols-1 gap-4 md:w-4/6 md:grid-cols-2 md:gap-4">
          {rateConvert?.map((item) => (
            <div
              key={item.id}
              className="flex w-full items-center justify-between gap-4 divide-x rounded-xl bg-white/75 p-4 transition hover:bg-white hover:shadow-xl"
            >
              <div className="flex flex-col items-start justify-center gap-2">
                <span className="text-sm font-bold text-neutral-500">
                  {item.title}
                  <span className="ml-2 rounded-md bg-neutral-300 px-2 py-1 font-normal leading-none text-black">
                    {item.text}
                  </span>
                </span>
                <img src={item.image} alt={item.title} className="h-8" />
              </div>
              <div className="pl-4 text-2xl font-bold text-[#666666] md:text-4xl">
                {item.rate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rate;
