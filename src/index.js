import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Input } from 'antd';
import 'antd/dist/antd.css';
 
ReactDOM.render(
  Routes,
  document.getElementById('content')
);