// import React from "react";
// import { string } from "prop-types";
// import { isEmptyArray } from "formik";

// const checkedObject = (totalValue, singleValue) => {
//   console.log(totalValue);
//   console.log(singleValue);
//   if (typeof totalValue != "string") {
//     return (
//       totalValue.indexOf(totalValue.find((x) => x.id === singleValue.id)) !== -1
//     );
//   } else {
//   }
// };

// const checkedObjectt = (totalValue, singleValue) => {
//   if (typeof totalValue != "string") {
//     return totalValue.length === singleValue.length;
//   }
// };

// const indexFindForSplice = (totalValue, singleValue) => {
//   if (!isEmptyArray(totalValue)) {
//     return totalValue.indexOf(totalValue.find((x) => x.id === singleValue.id));
//   } else {
//     console.log("isempty");
//   }
// };

// class renderCheckBoxesTestSingle extends React.Component {
//   checkboxGroup(optionn) {
//     let { label, required, options, input, meta } = this.props;
//     return optionn.map((option, index) => {
//       return (
//         <div className="checkbox" key={index}>
//           <label>
//             <input
//               type="checkbox"
//               name={`${input.name}[${index}]`}
//               value={option}
//               checked={checkedObject(input.value, option) || ""}
//               onChange={(event) => {
//                 let newValue = [...input.value];
//                 if (event.target.checked) {
//                   newValue.push({
//                     id: option.id,
//                     title: option.title,
//                     data: option.data,
//                   });
//                 } else {
//                   newValue.splice(indexFindForSplice(newValue, option), 1);
//                 }
//                 return input.onChange(newValue);
//               }}
//             />
//             {option.data.level}
//           </label>
//         </div>
//       );
//     });
//   }

//   render() {
//     let { label, required, options, input, meta } = this.props;

//     console.log("input");
//     console.log(input);
//     console.log("input");
//     return (
//       <div>
//         {/* <label>
//           <input
//             type="checkbox"
//             name={`${input.name}`}
//             value={options}
//             checked={checkedObjectt(input.value, options) || ""}
//             onChange={(event) => {
//               const newValue = [];
//               if (event.target.checked) {
//                 newValue.push(...options);
//               } else {
//                 //newValue.splice(indexFindForSplice(newValue, option), 1);
//               }
//               return input.onChange(newValue);
//             }}
//           />
//           Select all this modules permission
//         </label> */}
//         {options &&
//           Object.keys(options).map((optionn, index) => (
//             <React.Fragment key={index}>
//               <h5>{optionn}</h5>
//               {this.checkboxGroup(options[optionn])}
//             </React.Fragment>
//           ))}
//         {meta.touched && meta.error && (
//           <span className="text-danger">{meta.error}</span>
//         )}
//       </div>
//     );
//   }
// }

// export default renderCheckBoxesTestSingle;

//backup

import React from "react";
import { string } from "prop-types";
import { isEmptyArray } from "formik";
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Table,
  BreadcrumbItem,
  Breadcrumb,
  Container,
} from "reactstrap";

const checkedObject = (totalValue, singleValue) => {
  //   console.log("totalValue====", totalValue);
  //   console.log("singleValue====", singleValue);

  if (typeof totalValue != "string" && totalValue.length > 0) {
    return (
      totalValue.indexOf(totalValue.find((x) => x === singleValue.id)) !== -1
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
    return totalValue.indexOf(totalValue.find((x) => x === singleValue.id));
  } else {
    // console.log("isempty");
  }
};

class renderCheckBoxesTestSingle extends React.Component {
  checkboxGroup(optionn) {
    let { label, required, options, input, meta } = this.props;
    return optionn.map((option, index) => {
      return (
        <div className="checkbox form-group form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name={`${input.name}[${index}]`}
            value={option}
            checked={checkedObject(input.value, option) || ""}
            onChange={(event) => {
              let newValue = [...input.value];
              if (event.target.checked) {
                // newValue.push({
                //   id: option.id,
                //   title: option.title,
                //   data: option.data,
                // });
                console.log("input.value", newValue);
                console.log("option", option);
                newValue.push(option.id);
              } else {
                newValue.splice(indexFindForSplice(newValue, option), 1);
              }
              console.log("newValue====", newValue);
              return input.onChange(newValue);
            }}
          />
          <label className="form-check-label">{option.data.level}</label>
        </div>
      );
    });
  }

  render() {
    let { label, required, options, input, meta } = this.props;

    // console.log("input");
    // console.log(input);
    // console.log("input");
    return (
      <div>
        {/* <label>
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
          Select all this modules permission
        </label> */}

        <div className="parent_container_card">
          <Row>
            {options &&
              Object.keys(options).map((optionn, index) => (
                <React.Fragment key={index}>
                  <Col lg="3">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title h5">{optionn}</div>
                        <div className="card-text">
                          {this.checkboxGroup(options[optionn])}
                        </div>
                      </div>
                    </div>
                  </Col>
                </React.Fragment>
              ))}
          </Row>
        </div>
        {meta.touched && meta.error && (
          <span className="text-danger">{meta.error}</span>
        )}
      </div>
    );
  }
}

export default renderCheckBoxesTestSingle;
