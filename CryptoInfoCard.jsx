import * as React from "react";

function CryptoInfoCard() {
  return (
    <div className="flex gap-4 items-start mt-5">
      <div className="flex flex-col font-semibold leading-none whitespace-nowrap w-[162px]">
        <div className="flex items-center">
          <div className="flex items-center self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8df434424f1fbdb56cb924e84ba5913510375c53031114d5254538477025563d?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3"
              alt="Bitcoin logo"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            />
            <div className="flex flex-col self-stretch px-3 my-auto w-[130px]">
              <div className="flex gap-2 items-center">
                <div className="overflow-hidden self-stretch my-auto text-xl text-slate-900 w-[71px]">
                  Bitcoin
                </div>
                <div className="self-stretch my-auto text-sm text-gray-500">
                  BTC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-20 text-base font-medium leading-none text-white rounded">
        <div className="px-2 py-2.5 rounded border border-solid bg-slate-500 border-slate-500">
          Rank #1
        </div>
      </div>
    </div>
  );
}

export default CryptoInfoCard;
