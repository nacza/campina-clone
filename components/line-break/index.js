function LineBreak({ children }) {
  return (
    <div className="w-full min-h-full my-5 sm:my-8 lg:my-10 ">
      <div className="w-full flex justify-center items-center text-slate-500">
        <div className="pr-1 h-px w-full bg-slate-400 rounded-lg"></div>
        <p className="md:text-lg mx-5 flex-none sm:mx-10 font-bold">
          {children}
        </p>
        <div className="pl-1 h-px w-full bg-slate-400 rounded-lg"></div>
      </div>
    </div>
  );
}

export default LineBreak;
