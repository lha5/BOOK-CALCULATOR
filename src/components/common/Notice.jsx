function Notice({ contents = [] }) {
  return (
    <div className="mt-5">
      <h3 className="font-bold text-slate-500 mb-2">유의 사항</h3>
      <div className="text-slate-700 text-sm md:text-base">
        <ul className="list-outside list-disc pl-4 tabular-nums">
          {contents.map((item, idx) => (
            <li key={'notice' + idx + 1} className="mt-1 break-keep">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notice;
