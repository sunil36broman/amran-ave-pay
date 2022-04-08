import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { activateAuthLayout } from "../../store/layout/actions";
import { addTodoStart } from "../../store/toDo/toDoActions";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";
import { Field, Fields, FormSection, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "../FormUtils/renderField";
import renderTextArea from "../FormUtils/renderTextArea";
import { useHistory, withRouter } from "react-router-dom";

const ToDoCreate = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { toDoReducer } = useSelector((state) => state);

  useEffect(() => {
    // dispatch(activateAuthLayout())
    // dispatch(activateAuthLayout());
  }, [dispatch]);

  // if (toDoReducer.fetching) return <p>Loading...</p>
  // if (toDoReducer.error) {
  //     return <div style={{ color: 'red' }}>ERROR: {toDoReducer.error}</div>
  // }
  const submit = (values) => {
    dispatch(
      addTodoStart(
        {
          title: "foo",
          body: "bar",
          userId: 1,
        },
        history
      )
    );
  };
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <h4 className="mt-0 header-title">Create ToDo</h4>

              <form onSubmit={handleSubmit(submit)}>
                <Field
                  className="form-control"
                  name="userid"
                  type="text"
                  component={renderField}
                  label="User Name"
                />
                <Field
                  className="form-control"
                  name="title"
                  type="text"
                  component={renderField}
                  label="Title"
                />

                <Field
                  className="form-control"
                  name="body"
                  type="text"
                  component={renderTextArea}
                  label="Body"
                />
                <button type="submit" disabled={pristine || submitting}>
                  Submit
                </button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default reduxForm({
  form: "ToDoCreate", //             <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  initialValues: {},
  validate,
})(ToDoCreate);
