import React from 'react';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { render } from '@testing-library/react';
import Footer from './Footer';
import Sign from './Sign';



render(<Sign/>, document.getElementById('root'));
render(<Footer/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
