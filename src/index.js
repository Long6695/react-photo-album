import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlbumProvider from './context/albumContext';



ReactDOM.render(
  <AlbumProvider>
    <App />
  </AlbumProvider>,
  document.getElementById('root')
);

