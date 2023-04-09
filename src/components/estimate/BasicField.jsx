import InputElement from './input/InputElement';

function BasicField({ handleChange }) {
  return (
    <>
      <InputElement
        label="제본 형식"
        inputType="select"
        field="type"
        options={[
          { id: 'withBookFlaps', value: 3500, name: '가형' },
          { id: 'simpleCover', value: 3000, name: '나형' },
          { id: 'saddleStitchBinding', value: 900, name: '중철제본' },
        ]}
        handleChange={handleChange}
      />
      <InputElement
        label="출력 색상"
        inputType="select"
        field="coloring"
        options={[
          {
            id: 'allMono',
            value: 'mono',
            name: '흑백',
          },
          {
            id: 'allColor',
            value: 'color',
            name: '컬러',
          },
          {
            id: 'monoAndColor',
            value: 'monoAndColor',
            name: '부분 컬러(준비중)',
          },
        ]}
        handleChange={handleChange}
      />
    </>
  );
}

export default BasicField;
