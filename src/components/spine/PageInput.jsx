function PageInput() {
  return (
    <div className="flex flex-col items-start justify-center mt-10">
      <label className="text-slate-500 text-sm mb-1 pl-1" htmlFor="countPage">
        총 페이지 수
      </label>
      <input
        type="text"
        id="countPage"
        defaultValue={2}
        className="border border-slate-300 rounded-lg w-24 text-center p-3 text-lg font-medium"
      />
    </div>
  );
}

export default PageInput;
