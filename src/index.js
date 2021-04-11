import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/topics/basics/app';


const MainRoot = () => {
  return (
    <div>
      <App/>
    </div>
  )
}

ReactDOM.render(
    <MainRoot />,
  document.getElementById('root')
);

