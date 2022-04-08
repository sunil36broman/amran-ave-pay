import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import GlobalStyles from 'styles/GlobalStyles'
import App from 'pages/App'
import Store from 'store'
import 'typeface-poppins'
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./asset/css/style.css"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
