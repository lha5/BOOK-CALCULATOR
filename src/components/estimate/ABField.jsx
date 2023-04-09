import InputElement from 'components/estimate/input/InputElement';

const quantityMono = [
  {
    id: 'minMono',
    value: 30,
    name: '4권 ~ 18권',
  },
  {
    id: 'moreMono',
    value: 25,
    name: '20권 이상',
  },
];

const quantityColor = [
  {
    id: 'minColor',
    value: 150,
    name: '4권 ~ 18권',
  },
  {
    id: 'moreColor',
    value: 150,
    name: '20권 이상',
  },
];

function ABField({ data, handleChange, handleChecked }) {
  return (
    <>
      <InputElement
        label="제본 수량"
        inputType="radio"
        options={data.coloring === 'mono' ? quantityMono : quantityColor}
        radioName="quantity"
        handleChecked={handleChecked}
        field="quantity"
      />
      <InputElement
        label="본문 페이지 수"
        inputType="number"
        handleChange={handleChange}
        field="pages"
        defaultValue={data.pages}
      />
      {/* <InputElement
        label="박 옵션"
        inputType="radio"
        radioName="foil"
        handleChange={handleChange}
        field="options"
        options={[
          {
            id: 'zero',
            value: 0,
            name: '없음',
          },
          {
            id: 'one',
            value: 1,
            name: '한 가지',
          },
          {
            id: 'two',
            value: 2,
            name: '두 가지',
          },
          {
            id: 'three',
            value: 3,
            name: '세 가지',
          },
        ]}
      /> */}
    </>
  );
}

export default ABField;
