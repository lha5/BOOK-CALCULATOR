import Notice from 'components/common/Notice';
import PageTitle from 'components/common/PageTitle';
import ABField from 'components/estimate/ABField';
import CField from 'components/estimate/CField';
import InputElement from 'components/estimate/InputElement';

function index() {
  return (
    <div className="flex flex-col md:w-full lg:w-2/3 mx-auto pb-8">
      <PageTitle title="견적 계산기" />
      <div className="flex flex-col items-start justify-start mt-5 mb-8 md:w-full">
        <InputElement
          label="제본 형식"
          inputType="select"
          options={[
            { id: 'withBookFlaps', value: 3500, name: '가형' },
            { id: 'simpleCover', value: 3000, name: '나형' },
            { id: 'withBookFlaps', value: 900, name: '중철제본' },
          ]}
        />
        <InputElement
          label="출력 색상"
          inputType="select"
          options={[
            {
              id: 'allMono',
              value: 30,
              name: '전체 흑백',
            },
            {
              id: 'allColor',
              value: 150,
              name: '전체 컬러',
            },
            {
              id: 'monoAndColor',
              value: 300,
              name: '부분 컬러(준비중)',
            },
          ]}
        />
        <ABField />
        {/* <CField /> */}
      </div>
      <hr className="mb-5 border-t-0 border-b border-slate-300 w-full h-px" />
      <div className="flex items-center justify-end text-lg">한 권당 가격 : 00,000원</div>
      <Notice />
    </div>
  );
}

export default index;
