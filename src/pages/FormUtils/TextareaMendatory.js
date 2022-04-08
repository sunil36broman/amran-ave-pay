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
const TextareaMendatory = ({
  input,
  label,
  className,
  name,
  type,
  meta: { touched, error },
}) => (
  <FormGroup row>
    <Label htmlFor="example-text-input" sm="4" className="text-right">
      {label} <span className="text-danger"> *</span>
    </Label>
    <Col sm="8">
      <textarea
        {...input}
        placeholder={label}
        type={type}
        className={className}
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </Col>
  </FormGroup>
);

export default TextareaMendatory;
