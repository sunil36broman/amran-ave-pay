import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTaskById, requestFetchUser } from 'store/ducks/task'

import mastercard from '../../asset/images/mastercard.png';
// import {
//     Container,
//     InputContainer,
//     Input,
//     TodoListContainer,
//     TodoContainer,
//     Title,
//     EmptyListMessage,
//     AddButton,
//     TaskItem,
//     Error,
//   } from './styles'
import { Button,Container,Row,Col,Card } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";

const Home = ({ match }) => {
  const userNameRef = useRef(null)
  const [username, setUserName] = useState('dddd')
  const [task, setTask] = useState('ddd')

  const [token, setToken] = useState('')
  const [invoice_id, setInvoice_id] = useState('')
  

  

  const dispatch = useDispatch()
  const { taskList, showError } = useSelector(({ Task }) => Task)


  let { id } = useParams();

  const search = useLocation().search;
  useEffect(() => {
    // Update the document title using the browser API
    
    const token=new URLSearchParams(search).get("token");
    setToken(token)
    console.log("token",token);//12345
    const invoice_id=new URLSearchParams(search).get("invoice_id");
    setInvoice_id(invoice_id)
    console.log("invoice_id",invoice_id);//12345

    // setUserName('pagol')
    // setTask('chagoll')
    const fetchUserAction = requestFetchUser(username, task)
    dispatch(fetchUserAction)

    setUserName('')
    setTask('')

    // userNameRef.current.focus()


  },[dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !task.trim()) return

    const fetchUserAction = requestFetchUser(username, task)
    dispatch(fetchUserAction)

    setUserName('')
    setTask('')

    userNameRef.current.focus()
  }

  const handleRemoveTask = (id) => {
    const removeTaskAction = removeTaskById(id)
    dispatch(removeTaskAction)
  }

  return (
    <React.Fragment>
    <Container fluid className="header-line"> 
        <Row>
              <Col className="text-center custom-header" >
                <img src={mastercard} title="logo" />
                
              </Col>
        </Row>
    </Container>
    <Container fluid="sm" style={{marginTop: '1%',
    marginBottom: '5%'}}>  
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <Row className="justify-content-md-center custom-class01">
              <Col className="text-center">
                <Card.Text className='custom-class02'>
                <h4>token: {token}</h4>
                <h4> invoice_id: {invoice_id}</h4>
               
                Click on the payment option you would like to use.
                </Card.Text>
              </Col>
            </Row>
           <Row className="justify-content-md-center">
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src={mastercard} />
                  <Card.Body>
                    <Button variant="primary" className='btn-primary_orange'>PAYNOW</Button>
                  </Card.Body>
                </Card>
              </Col>  
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src={mastercard} />
                  <Card.Body>
                    <Button variant="primary" className='btn-primary_visa'>PAYNOW</Button>
                  </Card.Body>
                </Card>
              </Col>  
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src={mastercard} />
                  <Card.Body>
                    <Button variant="primary" className='btn-primary_master'>PAYNOW</Button>
                  </Card.Body>
                </Card>
              </Col>  
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src={mastercard} />
                  <Card.Body>
                    <Button variant="primary" className='btn-primary_mobi'>PAYNOW</Button>
                  </Card.Body>
                </Card>
              </Col>  
            </Row>
            
           
            
          </Col>
        </Row>
        
  </Container>
  <Container style={{}}>
        <Row className="justify-content-md-center custom-content1">
              <Col className="text-center">
                <Card.Title className='custom-content2'>
                  <h3>Secure Authenticated Merchant:</h3>            
                </Card.Title>
                <Card.Text className='custom-content3'>
                  You are now connected to a secure payment site operated by AvePay. Ypur payment details will be securely transmitted to Bank , Card and Payment companies for transaction authorisation using to 256-bit SS4 encryption.
                </Card.Text>
              </Col>
        </Row>
        <Row>
              <Col className="text-center">
                <Card.Title style={{padding: '45px 0 0 0'}}>
                  AvePay | Copyright All Rights Reserved 2017
                </Card.Title>
          </Col>
        </Row>
  </Container>
  
  </React.Fragment>
  );
}
export default Home