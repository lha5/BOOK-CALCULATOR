import InputElement from 'components/estimate/InputElement';

function CField() {
  return (
    <>
      <InputElement label="본문 페이지 수(최대 48P)" inputType="number" />
      <InputElement label="제본 수량" inputType="number" min={10} />
      <InputElement
        label="추가 옵션"
        inputType="checkbox"
        options={[
          {
            id: 'coverPaper',
            value: 500,
            name: '스타라이트 다이아몬드 200g (코팅 X)',
          },
          {
            id: 'colorPaper',
            value: 100,
            name: '색면지',
          },
          {
            id: 'coating',
            value: 200,
            name: '코팅',
          },
        ]}
      />
    </>
  );
}

export default CField;
