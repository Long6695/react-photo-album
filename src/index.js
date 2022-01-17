import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlbumProvider from './context/albumContext';



ReactDOM.render(
  <React.StrictMode>
    <AlbumProvider>
      <App />
    </AlbumProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

