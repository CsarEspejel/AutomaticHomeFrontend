import React from 'react';
import ReactDOM from 'react-dom';
import Login from './views/login/index';
import './styles/index.css';

const Index = () => {
  return(
    <div>
      <Login />
    </div>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
