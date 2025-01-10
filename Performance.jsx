import * as React from "react";

function PerformanceIndicator() {
  return (
    <div className="flex flex-col justify-center px-2.5 py-4 mt-6 w-96 max-w-full bg-white rounded-lg border border-solid border-zinc-200">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold leading-tight text-slate-900">
          Performance
        </h2>
        <div className="flex flex-col mt-4 w-full">
          <div className="flex flex-col w-full">
            <div className="flex relative flex-col pb-4 w-full min-h-[1px]">
              <div className="flex z-0 items-center w-full">
                <div className="flex flex-col self-stretch pb-3.5 my-auto text-gray-700 min-w-[85px] w-[94px]">
                  <div className="pt-1.5 pr-3 w-full text-sm leading-none">
                    Today's Low
                  </div>
                  <div className="pr-4 mt-2.5 w-full text-base font-medium leading-none whitespace-nowrap">
                    46,930.22
                  </div>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center self-stretch px-2 py-5 my-auto basis-0">
                  <div className="flex flex-col w-full rounded-lg bg-neutral-900 bg-opacity-30 min-h-[5px]">
                    <div className="flex flex-1 w-full rounded-xl min-h-[5px]" />
                  </div>
                </div>
                <div className="flex flex-col self-stretch pb-3.5 my-auto text-right text-gray-700 min-w-[85px] w-[94px]">
                  <div className="pt-1.5 pl-2 w-full text-sm leading-none">
                    Today's High
                  </div>
                  <div className="pl-4 mt-2.5 w-full text-base font-medium leading-none whitespace-nowrap">
                    49,343.83
                  </div>
                </div>
              </div>
              <div className="flex absolute left-2/4 z-0 flex-col items-center self-start text-sm leading-none text-gray-700 whitespace-nowrap -translate-x-2/4 top-[38px] translate-y-[0%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/533aebd1728f401b474d3c92797dec9ceb8335faec0fc06650bd80f54e3df6b0?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3"
                  alt=""
                  className="object-contain w-3 aspect-[1.5]"
                />
                <div className="mt-2">$48,637.83</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceIndicator;
