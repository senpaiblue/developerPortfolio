import React from "react";

const Shimmer = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button onClick={handleClick} className={`${otherClasses} inline-flex h-12 w-[40%] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white-200 transition-colors focus:outline-none`}>
        {title}
      </button>
    </div>
  );
};

export default Shimmer;
