import React, { useState } from 'react';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Modal from './Modal';

import { render } from '@testing-library/react';
import Footer from './Footer';
import Book from './Book';

const (modalActive, setModalActive) = useState(true)
render(<Headers/>, document.getElementById('root'));
render(<Book/>, document.getElementById('root'));
render(<Footer/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
