
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

const DropDownMendatory = ({
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
        <Label htmlFor="example-text-input" sm="4" className="text-right filter-color">
          {props.label} <span className="text-danger"> *</span>
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

export default DropDownMendatory;
