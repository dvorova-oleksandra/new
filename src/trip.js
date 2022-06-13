import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Headers from './Header';
import Footer from './Footer';
import Info from './InfoAboutTrip';

const domContainer = document.getElementById("trip");
const root = ReactDOM.createRoot(domContainer);

root.render(<Headers/>);
root.render(<Info/>);
root.render(<Footer/>);


reportWebVitals();
