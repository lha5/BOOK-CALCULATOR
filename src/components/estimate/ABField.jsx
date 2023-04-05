import InputElement from 'components/estimate/InputElement';

const quantityMin = [
  {
    id: 'minMono',
    value: 30,
    name: '4권 ~ 18권',
  },
  {
    id: 'minColor',
    value: 150,
    name: '20권 이상',
  },
];

const quantityMore = [
  {
    id: 'moreMono',
    value: 25,
    name: '4권 ~ 18권',
  },
  {
    id: 'moreColor',
    value: 120,
    name: '20권 이상',
  },
];

function ABField() {
  return (
    <>
      <InputElement label="본문 페이지 수(짝수)" inputType="number" />
      <InputElement
        label="제본 수량"
        inputType="radio"
        options={quantityMin}
        radioName="quantity"
      />
      <InputElement
        label="박 옵션"
        inputType="radio"
        radioName="foil"
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
      />
    </>
  );
}

export default ABField;
