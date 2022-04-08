// // import React from 'react';
// // export const renderSelect = props => {
// //   const renderSelectOptions = (key, index) => {
// //     return (
// //       <option
// //         key={`${index}-${key}`}
// //         value={key}
// //       >
// //         {props.options[key]}
// //       </option>
// //     );
// //   }

// //   if (props && props.options) {
// //     return (
// //       <div className="form-group">

// //         <label>{props.label}</label>
// //         <select {...props.input} className={props.className}>
// //           <option value="">Select</option>
// //           {Object.keys(props.options).map(renderSelectOptions)}
// //         </select>
// //         {props.meta.touched && props.meta.error && <span className="text-danger">{props.meta.error}</span>}
// //       </div>
// //     )
// //   }
// //   return <div></div>
// // }

// // export default renderSelect;
// const optionss = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// import React from "react";
// import Select from "react-select";
// export const renderDropdown = (props) => {
//   //   const renderSelectOptions = (item, index) => {
//   //     return (
//   //       <option key={`${index}`} value={item.value}>
//   //         {item.label}
//   //       </option>
//   //     );
//   //   };

//   // if (props && props.options) {
//   return (
//     <div className="form-group">
//       <label>{props.label}</label>
//       {/* <Select
//           //   {...props.input}
//           //   className={props.className}
//           options={props.options}
//         /> */}
//       <Select name="designation_id2" options={optionss} />
//       {/* {props.meta.touched && props.meta.error && (
//         <span className="text-danger">{props.meta.error}</span>
//       )} */}
//     </div>
//   );
//   // }
//   //return <div></div>;
// };

// export default renderDropdown;

// // export default renderDropdown = ({
// //   input,
// //   onBlur,
// //   id,
// //   meta: { touched, error },
// //   ...props
// // }) => {
// //   const handleBlur = (e) => e.preventDefault();

// //   return (
// //     <React.Fragment>
// //       <Select
// //         {...input}
// //         id="object__dropdown--width"
// //         options={allRepos}
// //         onChange={input.onChange}
// //         onBlur={handleBlur}
// //       />
// //     </React.Fragment>
// //   );
// // };
import React from "react";
import Select from "react-select";
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
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const renderDropdown = ({
  input,
  onBlur,
  id,
  meta: { touched, error },
  isDisabled,
  ...props
}) => {
  const handleBlur = (e) => e.preventDefault();

  if (props && props.options) {
    return (
      <FormGroup row>
        <Label
          htmlFor="example-text-input"
          sm="4"
          className="text-right filter-color"
        >
          {props.label}
        </Label>
        <Col sm="8">
          <Select
            {...input}
            id="object__dropdown--width"
            options={props.options}
            onChange={input.onChange}
            onBlur={handleBlur}
            isDisabled={isDisabled}
            menuPortalTarget={document.body}
          />
          {touched && error && <span className="text-danger">{error}</span>}
        </Col>
      </FormGroup>
    );
  }
  return <div></div>;
};

export default renderDropdown;
