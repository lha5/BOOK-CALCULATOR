function Card({ weight = 100, result = 1.0 }) {
  return (
    <div className="flex border border-slate-300 rounded-lg w-96 h-52">
      <div className="flex items-center nanumsr w-44 relative justify-center text-3xl font-black bg-slate-500 text-white rounded-l-lg">
        {weight}g
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <span className="text-slate-500">책등 두께</span>
        <span className="text-3xl font-semibold">{result}mm</span>
      </div>
    </div>
  );
}

export default Card;
