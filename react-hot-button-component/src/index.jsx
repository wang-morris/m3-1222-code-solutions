import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomButton from './hot-button.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
