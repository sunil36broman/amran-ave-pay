import React from 'react';
export const renderCheckBox = props => {
  return (
    <div className="flex items-center mv4 w-100">
      <div className="sans-serif">{props.label}</div>
      <input
        {...props.input}
        className="mr2"
        type="checkbox"
        disabled={props.disabled}
        checked={props.input.value}
      />
      {props.meta.touched && props.meta.error && <span className="text-danger">{props.meta.error}</span>}

    </div>
  );
}
export default renderCheckBox;