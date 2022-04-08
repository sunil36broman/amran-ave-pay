import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTaskById, requestFetchUser } from 'store/ducks/task'
import {
    Container,
    InputContainer,
    Input,
    TodoListContainer,
    TodoContainer,
    Title,
    EmptyListMessage,
    AddButton,
    TaskItem,
    Error,
  } from './styles'

const RedirectPage = () => {
  

  return (
        <Container>
           <Title>Redux Saga RedirectPage List</Title>
        </Container>
  );
}
export default RedirectPage