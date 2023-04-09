import CheckboxContext from 'context/CheckboxContext';

function CheckboxGroup({
  label,
  children,
  disabled: groupDisabled,
  values,
  onChange,
}) {
  const isDisabled = (disabled) => disabled || groupDisabled;

  const isChecked = (value) => values.includes(value);

  const toggleValue = ({ checked, value }) => {
    if (checked) {
      onChange(values.concat(value));
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };

  return (
    <fieldset className="block w-full md:w-1/2 lg:w-1/3 mt-5">
      <legend className="text-slate-500">{label}</legend>
      <CheckboxContext.Provider value={{ isDisabled, isChecked, toggleValue }}>
        {children}
      </CheckboxContext.Provider>
    </fieldset>
  );
}

export default CheckboxGroup;
