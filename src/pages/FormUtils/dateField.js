import React from "react";
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
const dateField = ({
  input,
  label,
  defaultValue,
  className,
  name,
  type,
  meta: { touched, error },
}) => (
  //   <div className="form-group">
  //     <label>{label}</label>
  //     <div>
  //        <Input
  //         type={type}
  //         name={input.name}
  //         id="example-date-input"
  //         defaultValue={defaultValue}
  //         onChange={(event) => {
  //            return input.onChange(event.target.value);
  //         }}
  //       />
  //       {touched && error && <span className="text-danger">{error}</span>}
  //     </div>
  //   </div>
  <FormGroup row>
    <Label
      htmlFor="example-text-input"
      sm="4"
      className="text-right filter-color"
    >
      {label}
    </Label>
    <Col sm="8">
      {/* <Input
    type="text"
    defaultValue="Artisanal kale"
    id="example-text-input"
  /> */}
      <Input
        type={type}
        name={input.name}
        id="example-date-input"
        defaultValue={defaultValue}
        onChange={(event) => {
          return input.onChange(event.target.value);
        }}
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </Col>
  </FormGroup>
);

export default dateField;
