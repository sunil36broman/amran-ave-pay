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
const TextFieldRender = ({
  input,
  label,
  className,
  name,
  type,
  meta: { touched, error },
}) => (
  // <div className="form-group">
  //   <label>{label}</label>
  //   <div>
  //     <input {...input} placeholder={label} type={type} className={className} />
  //     {touched && error && <span className="text-danger">{error}</span>}
  //   </div>
  // </div>
  <FormGroup row>
    <Col sm="4" className="text-right filter-color">
    <Label className="filter-color" htmlFor="example-text-input" >
      {label}
    </Label>
    </Col>
    <Col sm="8" className="text-left">
      {/* <Input
        type="text"
        defaultValue="Artisanal kale"
        id="example-text-input"
      /> */}
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && error && <span className="text-danger">{error}</span>}
    </Col>
  </FormGroup>
);

export default TextFieldRender;
