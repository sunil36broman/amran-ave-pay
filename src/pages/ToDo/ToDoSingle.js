import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTodoStart} from "../../store/toDo/toDoActions";
import {useHistory} from "react-router-dom";

const ToDoSingle = ({match}) => {
    const history = useHistory();
    const { id } = match.params
    const dispatch = useDispatch()

    const {toDoReducer,Layout} = useSelector(state =>state);
    const  singleData=toDoReducer.todo;
    
    useEffect(() => {
        // dispatch(activateAuthLayout())
        dispatch(fetchTodoStart(id))
    },[dispatch]);
    
    
    if (toDoReducer.fetching) return <p>Loading...</p>
    if (toDoReducer.error) {
        return <div style={{ color: 'red' }}>ERROR: {toDoReducer.error}</div>
    }

    if (!singleData) {
        return (
          <section>
            <h2>singleData not found!</h2>
          </section>
        )
    }

    return (
        <React.Fragment>
             <article className="post">
                <h2>{singleData.title}</h2>
                <p className="post-content">{singleData.body}</p>
            </article>
        </React.Fragment>
    );
};

export default ToDoSingle;








