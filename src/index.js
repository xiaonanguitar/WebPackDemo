//Created by z00250978 on 2017/03/24.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Routes from './routes';
import { Input } from 'antd';
import 'antd/dist/antd.css';
 
const store = configureStore();

ReactDOM.render((  
  <Provider store={store}>
    {Routes}
  </Provider>),
  document.getElementById('content')
);