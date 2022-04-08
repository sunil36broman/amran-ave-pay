import React from "react";
import Select from "react-select";
import { Col, FormGroup } from "reactstrap";

const RenderDropdownPlaceholder = ({
  input,
  onBlur,
  placeholder,
  id,
  meta: { touched, error },
  isDisabled,
  ...props
}) => {
  const handleBlur = (e) => e.preventDefault();

  if (props && props.options) {
    return (
      <FormGroup row>
        <Col sm="12">
          <Select
            {...input}
            id="object__dropdown--width"
            options={props.options}
            onChange={input.onChange}
            onBlur={handleBlur}
            placeholder={placeholder}
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

export default RenderDropdownPlaceholder;
