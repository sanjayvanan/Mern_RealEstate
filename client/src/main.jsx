import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { persistor, store } from './redux/store.js';
import './index.css'
import {Provider} from 'react-redux'

import { PersistGate } from 'redux-persist/es/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Added provider to add the redux to our components 
   <Provider store={store}>     
    <PersistGate loading = {null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)
