import InputElement from 'components/estimate/input/InputElement';
import CheckboxGroup from './input/CheckboxGroup';
import Checkbox from './input/Checkbox';

function CField({ handleChange, options, setOptions }) {
  return (
    <>
      <InputElement
        label="본문 페이지 수(4의 배수, 최대 48P)"
        inputType="number"
        handleChange={handleChange}
        field="pages"
      />
      {/* <InputElement
        label="제본 수량"
        inputType="number"
        min={10}
        handleChange={handleChange}
        field="quantity"
      /> */}
      <CheckboxGroup label="추가 옵션" values={options} onChange={setOptions}>
        <Checkbox value="starlight">
          스타라이트 다이아몬드 200g (코팅 불가)
        </Checkbox>
        <Checkbox value="colorPaper">색면지</Checkbox>
        <Checkbox value="coating" disabled={options.includes('starlight')}>
          코팅
        </Checkbox>
      </CheckboxGroup>
    </>
  );
}

export default CField;
