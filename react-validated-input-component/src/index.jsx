import React from 'react';
import ReactDOM from 'react-dom/client';
import Password from './validated-input.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Password />);
