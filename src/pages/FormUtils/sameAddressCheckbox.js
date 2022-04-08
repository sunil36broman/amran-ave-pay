import React from "react";
class sameAddressCheckbox extends React.Component {
  // checkboxGroup() {
  //     let { label, required, options, input, meta } = this.props;
  //     return options.map((option, index) => {
  //         return (
  //             <div className="checkbox" key={index}>
  //                 <label>
  //                     <input type="checkbox"
  //                         name={`${input.name}[${index}]`}
  //                         value={option}
  //                         checked={checkedObject(input.value, option) || ''}
  //                         onChange={(event) => {
  //                             let newValue = [...input.value];
  //                             if (event.target.checked) {
  //                                 newValue.push(option);
  //                             } else {
  //                                 newValue.splice(indexFindForSplice(newValue, option), 1);
  //                             }
  //                             return input.onChange(newValue);
  //                         }} />
  //                     {option.label}
  //                 </label>
  //             </div>)
  //     });
  // }

  render() {
    let {
      values,
      value,
      label,
      required,
      options,
      input,
      meta,
      allFromvalues,
    } = this.props;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            {...input}
            //value={options}
            //checked={checkedObjectt(input.value, options) || ''}
            onChange={(event) => {
              const newValue = [];
              if (event.target.checked) {
                console.log("cheked");
                console.log(values);
                console.log(allFromvalues);

                console.log("values");
              } else {
                //newValue.splice(indexFindForSplice(newValue, option), 1);
                console.log("not cheked");
              }
              //return input.onChange(newValue);
            }}
          />
          same Address
        </label>

        {meta.touched && meta.error && (
          <span className="text-danger">{meta.error}</span>
        )}
      </div>
    );
  }
}

export default sameAddressCheckbox;
