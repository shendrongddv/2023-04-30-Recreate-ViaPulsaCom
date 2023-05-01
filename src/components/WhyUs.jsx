import { whyChooseUs } from "../copywritting";

const WhyUs = () => {
  const copywritting = whyChooseUs;
  console.log(copywritting);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:py-20">
      <h2 className="w-full text-center font-bold text-[#333333] md:w-1/2 md:text-start">
        Kenapa Convert Pulsa di Viapulsa Aja?
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {copywritting?.map((copy) => (
          <div
            key={copy.id}
            className="space-y-4 rounded-lg border border-neutral-100 p-6 transition hover:bg-white hover:shadow-lg"
          >
            <div className="flex items-end justify-items-start gap-4">
              <img className="h-10 md:h-12" src={copy.image} />
              <h3 className="text-xl font-bold text-[#333333] md:text-2xl">
                {copy.title}
              </h3>
            </div>
            <p className="text-base text-neutral-500 md:text-lg">{copy.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
