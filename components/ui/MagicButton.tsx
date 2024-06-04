import React from "react";
import { UrlWithStringQuery } from "url";

const MagicButton = ({title,icon,position,handleClick,otherClasses}:{title:string,icon: React.ReactNode, position:string;handleClick?:() => void;otherClasses?:string}) => {
  return (
    <div>
      <button onClick={handleClick} className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-12 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
