import * as React from "react";
import { Field } from "redux-form";
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

export const RedioMendatory = (props) => {
  if (props && props.input && props.options) {
    const renderRadioButtons = (key, index) => {
      return (
        // <label
        //   className="sans-serif w-100"
        //   key={`${index}`}
        //   htmlFor={`${props.input.name}-${index}`}
        // >
        //   <Field
        //     id={`${props.input.name}`}
        //     component="input"
        //     name={props.input.name}
        //     type="radio"
        //     value={key}
        //     className="mh2"
        //   />
        //   {props.options[key]}
        // </label>
        <React.Fragment key={index}>
          <div className="custom-control custom-radio custom-control-inline">
            {/* <Input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" /> */}
            <Field
              id={`${props.input.name}-${index}`}
              component="input"
              name={props.input.name}
              type="radio"
              value={key}
              className="custom-control-input"
            />
            <Label
              className="custom-control-label"
              for={`${props.input.name}-${index}`}
            >
              {props.options[key]}
            </Label>
          </div>
          &nbsp;
        </React.Fragment>
      );
    };
    return (
      <FormGroup row>
          <Label sm="4" className="text-right filter-color">
          {props.label}<span className="text-danger"> *</span>
        </Label>
        <Col sm="8">
          {props.options && Object.keys(props.options).map(renderRadioButtons)}

          {props.meta.touched && props.meta.error && (
            <span className="text-danger">{props.meta.error}</span>
          )}
        </Col>
      </FormGroup>
    );
  }
  return <div></div>;
};

export default RedioMendatory;
