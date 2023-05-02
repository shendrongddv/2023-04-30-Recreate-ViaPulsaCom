// import { Disclosure } from "@headlessui/react";
// import { FiChevronDown } from "react-icons/fi";

// const Accordion = () => {
//   return (
//     <Disclosure>
//       {({ open }) => (
//         <>
//           <Disclosure.Button className="py-2">
//             Is team pricing available?
//             <FiChevronDown className={open ? "rotate-180 transform" : ""} />
//           </Disclosure.Button>

//           <Disclosure.Panel className="text-gray-500">
//             Yes! You can purchase a license that you can share with your entire
//             team.
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default Accordion;

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { FAQ } from "../copywritting/index";

const faqs = FAQ;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Accordion() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <FiChevronDown
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
