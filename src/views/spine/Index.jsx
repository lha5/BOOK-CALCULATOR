import { useEffect, useState } from 'react';

import PageTitle from 'components/common/PageTitle';
import CalculateTable from 'components/spine/CalculateTable';
import Notice from 'components/common/Notice';

const noticeData = [
  '양면 기준입니다.',
  'cm가 아닌 mm단위 입니다.',
  '책등은 소수점 한 자리 까지만 적용합니다.',
  '칼라, 흑백 모두 동일합니다.',
  '예시 1 : 100g 기준 30페이지(양면) = 종이 15장입니다. 계산 결과는 2.65mm이므로, 2.6mm로 잡고 작업하시면 됩니다.',
  '예시 2 : 80g 기준 150페이지(양면) = 종이 75장입니다. 계산 결과는 7.75mm이므로, 7.7mm로 잡고 작업하시면 됩니다.',
  '책 앞 뒤에 포함되는 색면지는 포함하지 않으셔도 됩니다.',
];

function Index() {
  const [data, setData] = useState({ '100g': 100, '80g': 100 });
  const [result, setResult] = useState({ '100g': 1.0, '80g': 1.0 });

  useEffect(() => {
    setResult({
      '100g': (1.0 + data['100g'] * 0.055).toFixed(2),
      '80g': (1.0 + data['80g'] * 0.045).toFixed(2),
    });
  }, [data]);

  const handleSetData = (e, type) => {
    const val = e.target.value;
    let value = parseInt(val);

    if (value % 2 !== 0) {
      value += 1;
      setData({ ...data, [type]: value });
      const element = document.querySelector(`.input-${type}`);
      element.value = value;
    }

    if (isNaN(value)) {
      setData({ ...data, [type]: 0 });
      const element = document.querySelector(`.input-${type}`);
      element.value = 0;
    }

    setData({ ...data, [type]: value });
  };

  return (
    <div className="flex flex-col md:w-full lg:w-2/3 mx-auto pb-8">
      <PageTitle title="책등 계산기" />
      <div className="flex items-center justify-center mt-5 mb-7 md:w-full">
        <CalculateTable
          data={data}
          result={result}
          handleSetData={handleSetData}
        />
      </div>
      <Notice contents={noticeData} />
    </div>
  );
}

export default Index;
