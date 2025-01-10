import * as React from "react";
import TrendingCoin from "./TrendingCoin";
import PerformanceIndicator from "./PerformanceIndicator";
import TeamMember from "./TeamMember";
import CryptoInfoCard from "./CryptoInfoCard";

const trendingCoins = [
  {
    name: "Ethereum(ETH)",
    percentage: "8.21%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4efdd0c9314b364f548ca03e5a64f1893338c2a6020c5ed34762f5168fd2e395?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3",
    trend: "up"
  },
  {
    name: "Bitcoin (BTC)",
    percentage: "5.26%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6878f3afd4f7efba868395adafe5bccc9e1e5436a41a625310e20fa32bfdd369?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3",
    trend: "up"
  },
  {
    name: "Polygon (MATIC)",
    percentage: "4.32%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0581fc5335f6d0f24e6ea02d7875e41fdb483868c035b9a51026591f82787979?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3",
    trend: "up"
  }
];

const teamMembers = [
  {
    name: "John Smith",
    designation: "Designation here",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b21d6a94241b0953227857c7e468d22d354a08a1f0ed7e34fff4a866ee1841ec?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecce60a8927497eb381f279f8bc9cc70ec21a56274405ea30f21bee31a7615dc?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    name: "John Smith",
    designation: "Designation here",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2dea3096f9303f057b8f199c12fe5b79573ecfc5ed45b077452f9556aa9d1e41?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  }
];

function CryptoCard() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-gray-100 max-w-[480px]">
      <header className="flex flex-col justify-center px-6 py-0.5 w-full bg-white shadow-[0px_1px_8px_rgba(19,40,56,0.08)]">
        <div className="flex gap-10 justify-between items-center w-full">
          <div className="flex gap-10 items-center self-stretch my-auto min-h-[61px] w-[81px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/729dffa9e91b9d286e253f65bac2f26fdbd5f6e6b5d99aabcf40b8788ba21ec3?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3"
              alt="Company logo"
              className="object-contain self-stretch my-auto aspect-[3.86] w-[81px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/139fc613dc444f958658128e94e2a4b66b21952ff37f4385aa83fc4855b39102?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3"
            alt="Menu icon"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[27px]"
          />
        </div>
      </header>

      <main className="flex flex-col items-start mt-6 ml-3.5 w-full">
        <div className="flex items-center text-sm whitespace-nowrap">
          <div className="self-stretch my-auto text-slate-600 w-[140px]">
            Cryptocurrencies
          </div>
          <div className="self-stretch my-auto font-medium text-slate-900">
            Bitcoin
          </div>
        </div>

        <CryptoInfoCard />
        <PerformanceIndicator />

        <section className="flex flex-col mt-4 w-full">
          <h2 className="text-2xl font-semibold leading-tight text-slate-900">Team</h2>
          <p className="mt-4 text-base leading-7 text-slate-900">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
          </p>
          <div className="flex flex-col mt-2.5 w-full">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>

        <aside className="flex flex-col items-center mt-10 w-full">
          <div className="flex flex-col max-w-full text-sm w-[379px]">
            <div className="flex flex-col px-5 py-7 bg-blue-600 rounded-2xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f7f9f75cc08780e22a3d989aaa1beb172e4547f434303530373131365981be?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3"
                alt="KoinX logo"
                className="object-contain self-center max-w-full aspect-[1.07] w-[149px]"
              />
              <h2 className="mt-2 text-2xl font-bold leading-10 text-center text-white">
                Get Started with KoinX for FREE
              </h2>
              <p className="mt-5 font-medium text-center text-zinc-100">
                With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
              </p>
              <button className="flex gap-1.5 items-center justify-center self-center px-2 py-2.5 mt-5 max-w-full font-semibold leading-7 bg-white rounded-lg min-h-[48px] text-slate-900 w-[241px]">
                Get Started for FREE
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a089d0be58efeb263053bafc517e61a160b768847e635feaf2ab6011cfde9342?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col px-4 py-6 mt-8 w-full bg-white rounded-lg">
            <h2 className="text-2xl font-semibold leading-tight text-slate-900">
              Trending Coins (24h)
            </h2>
            <div className="flex flex-col mt-6 w-full text-base font-medium">
              {trendingCoins.map((coin, index) => (
                <TrendingCoin key={index} {...coin} />
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default CryptoCard;
