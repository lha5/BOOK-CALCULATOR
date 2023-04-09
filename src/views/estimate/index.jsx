import { useEffect, useState } from 'react';

import PageTitle from 'components/common/PageTitle';
import BasicField from 'components/estimate/BasicField';
import ABField from 'components/estimate/ABField';
import CField from 'components/estimate/CField';
import Notice from 'components/common/Notice';

const noticeData = [
  '[공통] 제본 유형 별로 소설 원고, 만화 원고, 내지 종류에 상관 없이 가격 동일합니다.',
  '[가형, 나형] 색면지와 표지 종이 가격은 제본 비용에 포함되어 추가 비용이 없습니다.',
  '[가형, 나형] 한 종류당 견적이 3만원 이하인 경우, 한 종류당 5,000원의 제작 비용이 추가됩니다.',
  '[중철제본] 4의 배수로, 48페이지 까지만 제작합니다. B6, A5 이외의 규격은 제작하지 않습니다.',
  '[중철제본] 책등 사각 압축 서비스는 16페이지 이상 부터 추가 비용 없이 제공됩니다.',
  '[중철제본] 스타라이트 다이아몬드 200g으로 표지 선택 시 권 당 500원 추가됩니다.',
  '[중철제본] 색면지 선택 시 권 당 100원 추가됩니다.',
  '[중철제본] 코팅 선택 시 10권 부터 유광/무광 상관 없이 권 당 200원 추가됩니다.',
];

function Index() {
  const [data, setData] = useState({
    type: 3500,
    coloring: 'mono',
    pages: 0,
    quantity: null,
  });
  const [result, setResult] = useState(0);
  const [optionsC, setOptionsC] = useState([]);

  useEffect(() => {
    if (data.type === '900') {
      setData({ ...data, quantity: 10 });
    } else {
      setData({ ...data, quantity: null });
    }
  }, [data.type]);

  useEffect(() => {
    noCheckedIfStarlight();
  }, [optionsC]);

  const handleChange = (e, field) => {
    const { value } = e.target;
    setData({ ...data, [field]: value });
  };

  const handleChecked = (e, field) => {
    const value = e.target.value;
    setData({ ...data, [field]: value });
  };

  const noCheckedIfStarlight = () => {
    if (optionsC.includes('starlight') && optionsC.includes('coating')) {
      setOptionsC([...optionsC.filter((v) => v !== 'coating')]);
    }
  };

  const handleCalculateResult = () => {
    if (data.type !== '900') {
      const pageValue =
        parseInt(data.pages) % 2 === 0
          ? parseInt(data.pages)
          : parseInt(data.pages) + 1;
      const answer = pageValue * parseInt(data.quantity) + parseInt(data.type);
      setResult(answer);
    } else {
      const optionStarlight = optionsC.includes('starlight') ? 500 : 0;
      const optionColorPaper = optionsC.includes('colorPaper') ? 100 : 0;
      const optionCoating = optionsC.includes('coating') ? 200 : 0;
      const answer =
        parseInt(data.pages) * (data.coloring === 'mono' ? 25 : 120) +
        900 +
        optionStarlight +
        optionColorPaper +
        optionCoating;
      setResult(answer);
    }
  };

  return (
    <div className="flex flex-col md:w-full lg:w-2/3 mx-auto pb-8">
      <PageTitle title="견적 계산기" />
      <div className="flex flex-col items-start justify-start mt-5 mb-8 md:w-full">
        <BasicField handleChange={handleChange} />
        {data.type === 900 || data.type === '900' ? (
          <CField
            handleChange={handleChange}
            options={optionsC}
            setOptions={setOptionsC}
          />
        ) : (
          <ABField
            data={data}
            handleChange={handleChange}
            handleChecked={handleChecked}
          />
        )}
      </div>
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="bg-emerald-500 disabled:opacity-70 disabled:cursor-default text-white rounded-md font-semibold py-3 px-6"
          onClick={handleCalculateResult}
          disabled={!data.pages || !data.quantity}
        >
          계산하기
        </button>
      </div>
      <hr className="my-5 border-t-0 border-b border-slate-300 w-full h-px" />
      <div className="flex items-center justify-end text-lg">
        한 권당 가격 : {new Intl.NumberFormat('ko-KR').format(result)}원
      </div>
      <Notice contents={noticeData} />
    </div>
  );
}

export default Index;
