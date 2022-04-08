// import React from 'react';
// export const renderSelect = props => {
//   const renderSelectOptions = (key, index) => {
//     return (
//       <option
//         key={`${index}-${key}`}
//         value={key}
//       >
//         {props.options[key]}
//       </option>
//     );
//   }

//   if (props && props.options) {
//     return (
//       <div className="form-group">

//         <label>{props.label}</label>
//         <select {...props.input} className={props.className}>
//           <option value="">Select</option>
//           {Object.keys(props.options).map(renderSelectOptions)}
//         </select>
//         {props.meta.touched && props.meta.error && <span className="text-danger">{props.meta.error}</span>}
//       </div>
//     )
//   }
//   return <div></div>
// }

// export default renderSelect;




import React from 'react';
export const renderSelect = props => {
  const renderSelectOptions = (item, index) => {
    return (
      <option
        key={`${index}`}
        value={item.value}
      >
        {item.label}
      </option>
    );
  }

  if (props && props.options) {
    return (
      <div className="form-group">

        <label>{props.label}</label>
        <select {...props.input} className={props.className}>
          <option value="">Select</option>
          {props.options.map(renderSelectOptions)}
        </select>
        {props.meta.touched && props.meta.error && <span className="text-danger">{props.meta.error}</span>}
      </div>
    )
  }
  return <div></div>
}

export default renderSelect;







