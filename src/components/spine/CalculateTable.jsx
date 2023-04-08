function CalculateTable({ data, result, handleSetData }) {
  return (
    <table className="w-full border-collapse border border-slate-400 text-center rounded-xl">
      <thead>
        <tr>
          <th className="border border-slate-300 py-5 text-slate-500 bg-slate-50 md:w-3/12">
            종이 종류
          </th>
          <th className="border border-slate-300 py-5 text-slate-500 bg-slate-50 md:w-5/12">
            총 페이지 수
          </th>
          <th className="border border-slate-300 py-5 text-slate-500 bg-slate-50">
            책등 너비
          </th>
        </tr>
      </thead>
      <tbody className="text-slate-700">
        <tr>
          <td className="border border-slate-300 py-6">
            <span className="text-xs text-slate-500 font-light">
              백색모조·미색모조
            </span>
            <br />
            100g
          </td>
          <td className="border border-slate-300 py-6">
            <input
              type="text"
              defaultValue={data['100g']}
              onBlur={(e) => handleSetData(e, '100g')}
              className="input-100g text-slate-500 border-0 border-b border-b-slate-500 focus:text-emerald-500 text-center w-14 p-2"
              autoFocus
            />{' '}
            페이지
          </td>
          <td className="border border-slate-300 py-6 font-semibold">
            {result['100g']}mm
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 py-6">
            <span className="text-xs text-slate-500 font-light">
              백색모조·미색모조
            </span>
            <br />
            80g
          </td>
          <td className="border border-slate-300 py-6">
            <input
              type="text"
              defaultValue={data['80g']}
              onBlur={(e) => handleSetData(e, '80g')}
              className="input-80g text-slate-500 border-0 border-b border-b-slate-500 focus:text-emerald-500 text-center w-14 p-2"
            />{' '}
            페이지
          </td>
          <td className="border border-slate-300 py-6 font-semibold">
            {result['80g']}mm
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CalculateTable;
