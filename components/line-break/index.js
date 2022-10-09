function LineBreak({ children }) {
  return (
    <div className="w-full min-h-full mt-8 mb-2">
      <div className="w-full flex items-center text-slate-500">
        <p className="md:text-lg flex-none font-bold">{children}</p>
      </div>
    </div>
  );
}

export default LineBreak;
