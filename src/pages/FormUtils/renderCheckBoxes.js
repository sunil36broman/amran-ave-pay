// import React from 'react';
// import { string } from 'prop-types';
// import { isEmptyArray } from 'formik';

// const checkedObject = (totalValue, singleValue) => {
//     console.log(totalValue)
//     console.log(singleValue)
//     if (typeof totalValue != 'string') {
//         return totalValue.indexOf(totalValue.find(x => x.name === singleValue.name)) !== -1
//     } else {

//     }
// }

// const checkedObjectt = (totalValue, singleValue) => {
//     if (typeof totalValue != 'string') {
//         return totalValue.length === singleValue.length
//     }
// }

// const indexFindForSplice = (totalValue, singleValue) => {
//     if (!isEmptyArray(totalValue)) {
//         return totalValue.indexOf(totalValue.find(x => x.name === singleValue.name))
//     } else {
//         console.log("isempty")
//     }

// }

// class renderCheckBoxes extends React.Component {
//     checkboxGroup() {
//         let { label, required, options, input, meta } = this.props;
//         return options.map((option, index) => {
//             return (
//                 <div className="checkbox" key={index}>
//                     <label>
//                         <input type="checkbox"
//                             name={`${input.name}[${index}]`}
//                             value={option}
//                             checked={checkedObject(input.value, option) || ''}
//                             onChange={(event) => {
//                                 let newValue = [...input.value];
//                                 if (event.target.checked) {
//                                     newValue.push(option);
//                                 } else {
//                                     newValue.splice(indexFindForSplice(newValue, option), 1);
//                                 }
//                                 return input.onChange(newValue);
//                             }} />
//                         {option.label}
//                     </label>
//                 </div>)
//         });
//     }

//     render() {
//         let { label, required, options, input, meta } = this.props;
//         return (
//             <div>
//                 <label>
//                     <input type="checkbox"
//                         name={`${input.name}`}
//                         value={options}
//                         checked={checkedObjectt(input.value, options) || ''}
//                         onChange={(event) => {
//                             const newValue = [];
//                             if (event.target.checked) {
//                                 newValue.push(...options);
//                             } else {
//                                 //newValue.splice(indexFindForSplice(newValue, option), 1);
//                             }
//                             return input.onChange(newValue);
//                         }} />
//                         Select all this modules permission
//                     </label>
//                 {this.checkboxGroup()}
//                 {meta.touched && meta.error && <span className="text-danger">{meta.error}</span>}

//             </div>
//         )
//     }
// }

// export default renderCheckBoxes;

import React from "react";
import { string } from "prop-types";
import { isEmptyArray } from "formik";

const checkedObject = (totalValue, singleValue) => {
  // console.log(totalValue);
  // console.log(singleValue);
  if (typeof totalValue != "string") {
    return (
      totalValue.indexOf(
        totalValue.find((x) => x.name === singleValue.name)
      ) !== -1
    );
  } else {
  }
};

const checkedObjectt = (totalValue, singleValue) => {
  if (typeof totalValue != "string") {
    return totalValue.length === singleValue.length;
  }
};

const indexFindForSplice = (totalValue, singleValue) => {
  if (!isEmptyArray(totalValue)) {
    return totalValue.indexOf(
      totalValue.find((x) => x.name === singleValue.name)
    );
  } else {
    console.log("isempty");
  }
};

class renderCheckBoxes extends React.Component {
  checkboxGroup() {
    let { label, required, options, input, meta } = this.props;
    return options.map((option, index) => {
      return (
        <div className="checkbox" key={index}>
          <label>
            <input
              type="checkbox"
              name={`${input.name}[${index}]`}
              value={option}
              checked={checkedObject(input.value, option) || ""}
              onChange={(event) => {
                let newValue = [...input.value];
                if (event.target.checked) {
                  newValue.push(option);
                } else {
                  newValue.splice(indexFindForSplice(newValue, option), 1);
                }
                return input.onChange(newValue);
              }}
            />
            {option.label}
          </label>
        </div>
      );
    });
  }

  render() {
    let { label, required, options, input, meta } = this.props;
    return (
      <React.Fragment>
        <th>
          <label>
            <input
              type="checkbox"
              name={`${input.name}`}
              value={options}
              checked={checkedObjectt(input.value, options) || ""}
              onChange={(event) => {
                const newValue = [];
                if (event.target.checked) {
                  newValue.push(...options);
                } else {
                  //newValue.splice(indexFindForSplice(newValue, option), 1);
                }
                return input.onChange(newValue);
              }}
            />
            {/* Select all this modules permission */}
          </label>
          {input.name}
        </th>
        <td>
          <div className="each_parent_div">
            {this.checkboxGroup()}
            {meta.touched && meta.error && (
              <span className="text-danger">{meta.error}</span>
            )}
          </div>
        </td>
      </React.Fragment>
    );
  }
}

export default renderCheckBoxes;
