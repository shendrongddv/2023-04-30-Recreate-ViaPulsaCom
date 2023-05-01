import { tutorialConvert, paymentProvider } from "../copywritting";

import img1 from "../assets/section/section-tutorial-Img.png";

const Tutorial = () => {
  const copywritting = tutorialConvert;

  return (
    <div className="bg-[#2E343A] px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-20 text-white">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex w-full justify-center md:w-3/12">
            <img src={img1} className="h-auto w-1/2 md:w-full" />
          </div>
          <div className="flex w-full flex-col space-y-6 text-center md:w-8/12 md:text-start">
            <h2 className="font-bold">Tutorial Convert Pulsa di Viapulsa</h2>
            <ul className="space-y-4">
              {copywritting?.map((copy) => (
                <li
                  key={copy.id}
                  className="flex items-start justify-start text-start"
                >
                  <span className="mr-3 mt-[1px] flex aspect-square h-6 items-center justify-center rounded-lg bg-[#EC9921] p-1 text-sm font-bold leading-none text-[#2E343A] shadow-sm">
                    {copy.id}
                  </span>
                  {copy.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="font-bold">Metode Pembayaran</h2>
          <p>
            Viapulsa menyediakan berbagai macam metode pembayaran baik melalui
            Bank ataupun eWallet.
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-lg md:w-3/4 md:gap-6 md:p-6">
            {paymentProvider?.map((payment) => (
              <img
                key={payment.id}
                src={payment.image}
                alt={payment.title}
                className="h-10 rounded-md p-2 transition hover:bg-neutral-100 hover:shadow-lg md:h-14 md:p-2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
