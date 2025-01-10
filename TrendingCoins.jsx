import * as React from "react";

function TrendingCoin({ name, percentage, icon, trend }) {
  return (
    <div className="flex gap-10 justify-between items-center mt-5 first:mt-0 w-full">
      <div className="flex gap-1.5 items-center self-stretch my-auto text-slate-900">
        <img
          loading="lazy"
          src={icon}
          alt={`${name} icon`}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto">{name}</div>
      </div>
      <div className="flex gap-2 justify-center items-center self-stretch px-2 py-1.5 my-auto text-center text-emerald-500 bg-emerald-50 rounded min-h-[28px] w-[84px]">
        <img
          loading="lazy"
          src={trend === "up" ? "https://cdn.builder.io/api/v1/image/assets/TEMP/6861c7faf3abfca20273e8ee75cc1e57579201cf1450a7d022f2417b8c825062?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3" : "https://cdn.builder.io/api/v1/image/assets/TEMP/52181c2b882603ddecf644a0b79e80ec8be579189f5f2d41d6b4e93a11bba95c?placeholderIfAbsent=true&apiKey=c9c387d18b104f188e441575e4f43ee3"}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.38] w-[11px]"
        />
        <div className="self-stretch my-auto">{percentage}</div>
      </div>
    </div>
  );
}

export default TrendingCoin;
