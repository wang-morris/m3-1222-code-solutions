import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion />);
