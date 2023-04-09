import { useContext } from 'react';

import CheckboxContext from 'context/CheckboxContext';

function Checkbox({ children, disabled, value, checked, onChange }) {
  const context = useContext(CheckboxContext);

  if (!context) {
    return (
      <label
        className={`flex flex-row items-center justify-start mt-0.5 text-slate-700${
          disabled ? ' text-slate-300' : ''
        }`}
      >
        <input
          type="checkbox"
          className="mr-2 rounded-sm disabled:border-slate-300"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />{' '}
        {children}
      </label>
    );
  }

  const { isDisabled, isChecked, toggleValue } = context;

  return (
    <label
      className={`flex flex-row items-center justify-start mt-0.5 text-slate-700${
        disabled ? ' text-slate-300' : ''
      }`}
    >
      <input
        type="checkbox"
        className="mr-2 rounded-sm disabled:border-slate-300"
        disabled={isDisabled(disabled)}
        checked={isChecked(value)}
        onChange={({ target: { checked } }) => toggleValue({ checked, value })}
      />{' '}
      {children}
    </label>
  );
}

export default Checkbox;
