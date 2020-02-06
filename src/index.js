import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './scss/index.scss';
import App from './components/app/';

render(<App />, document.getElementById('app'));