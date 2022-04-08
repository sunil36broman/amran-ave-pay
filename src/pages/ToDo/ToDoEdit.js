import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector,connect} from "react-redux";
import {fetchTodoEditStart,editTodoStart} from "../../store/toDo/toDoActions";

import {Button, Card, CardBody, Col, Row, Table} from "reactstrap";
import { Field,Fields,FormSection, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from '../FormUtils/renderField';
import renderTextArea from '../FormUtils/renderTextArea';
import {useHistory} from "react-router-dom";

const ToDoEdit = (props) => {
    const { id } = props.match.params
    const dispatch = useDispatch()

    const history = useHistory();
    const {toDoReducer} = useSelector(state =>state);
   
    useEffect(() => {
      dispatch(fetchTodoEditStart(id))
    },[dispatch]);

    if (toDoReducer.fetching) return <p>Loading...</p>
    if (toDoReducer.error) {
        return <div style={{ color: 'red' }}>ERROR: {toDoReducer.error}</div>
    }
    
    const submit=(values)=>{
        dispatch(editTodoStart(id, values, history))
    }
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
                                    name="userId"
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
                                <button type="submit">Submit</button>
                            </form> 
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

const ToDoEditForm = reduxForm({
    form: 'ToDoUpdate', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize : true, // this is needed!!
    validate
})(ToDoEdit);
  
const mapStateToProps = state => {
return {
    initialValues: state.toDoReducer.editTodo
}
}
export default connect(mapStateToProps)(ToDoEditForm)