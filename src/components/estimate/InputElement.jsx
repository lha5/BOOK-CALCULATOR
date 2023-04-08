function InputElement({ label = '', inputType = 'number', options = [], min = 4, radioName = '' }) {
  const InputText = () => (
    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 text-slate-700" />
  );

  const InputNumber = () => (
    <input
      type="number"
      className="mt-1 block w-full rounded-md border-gray-300 text-slate-700"
      min={min}
    />
  );

  const InputSelect = () => (
    <select
      className="mt-1 block w-full rounded-md border-gray-300 text-slate-700"
      defaultValue={options[0].value}
    >
      {options.map((item) => (
        <option key={item.id} value={item.value} disabled={item.id === 'monoAndColor'}>
          {item.name}
        </option>
      ))}
    </select>
  );

  const InputRadio = () => (
    <div className="flex flex-col text-slate-700">
      {options.map((item) => (
        <label key={item.id} className="flex flex-row items-center justify-start mb-0.5">
          <input
            type="radio"
            defaultChecked={options[0].name === item.name}
            name={radioName}
            value={item.value}
            className="mr-2"
          />
          {item.name}
        </label>
      ))}
    </div>
  );

  const InputCheckbox = () => (
    <div className="flex flex-col text-slate-700">
      {options.map((item) => (
        <label key={item.id} className="flex flex-row items-center justify-start mt-0.5">
          <input type="checkbox" value={item.value} className="mr-2" /> {item.name}
        </label>
      ))}
    </div>
  );

  const renderInputElement = () => {
    switch (inputType) {
      case 'text':
        return InputText();
      case 'number':
        return InputNumber();
      case 'select':
        return InputSelect();
      case 'radio':
        return InputRadio();
      case 'checkbox':
        return InputCheckbox();
      default:
        break;
    }
  };

  return (
    <label className="block w-full md:w-1/2 lg:w-1/3 first-of-type:mt-0 mt-5">
      <span className="text-slate-500">{label}</span>
      {renderInputElement()}
    </label>
  );
}

export default InputElement;
