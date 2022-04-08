import React from "react";
import { Col, FormGroup } from "reactstrap";

const RenderFieldPlaceholder = ({ input, className, placeholder, name, type, meta: { touched, error } }) => (
    <FormGroup row>
        <Col md="12">
            <input {...input} placeholder={placeholder} name={name} type={type} className={className} />
            {touched && error && <span className="text-danger">{error}</span>}
        </Col>
    </FormGroup>
);

export default RenderFieldPlaceholder;
