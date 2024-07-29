function Loader() {
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <p className="pr-1 text-amber-700">Loading questions </p>
        <div className="w-2 h-2 bg-amber-700 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-300"></div>
        <div className="w-2 h-2 bg-amber-700 rounded-full animate-bounce delay-700"></div>
      </div>
    </>
  );
}

export default Loader;
