// ___React___________________________________________________________________________________________________________
import React from 'react';
import ReactDOM from 'react-dom/client';
// ___Redux___________________________________________________________________________________________________________
import { store } from './redux/store'
import { Provider } from 'react-redux'
// ___Components______________________________________________________________________________________________________
import App from './App';
// ___Styles__________________________________________________________________________________________________________
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
