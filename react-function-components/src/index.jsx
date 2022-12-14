import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>{props.message}</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <CustomButton message="Click Me!" />;
root.render(element);
