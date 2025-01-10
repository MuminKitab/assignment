import * as React from "react";

function TeamMember({ name, designation, image, description }) {
  return (
    <div className="flex flex-col p-3 mt-6 first:mt-0 w-full bg-indigo-50 rounded-lg border-0 border-sky-500 border-solid">
      <div className="flex flex-col items-center self-center max-w-full text-center w-[129px]">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-contain w-24 rounded-lg aspect-[0.93]"
        />
        <div className="flex flex-col items-center mt-3.5">
          <div className="text-base font-semibold text-slate-900">{name}</div>
          <div className="mt-1 text-xs font-medium text-slate-500">
            {designation}
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm leading-6 text-slate-900">{description}</div>
    </div>
  );
}

export default TeamMember;
