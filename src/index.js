
import { hydrate, render } from "react-dom";
//import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './pages/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-button/dist/styles.css';
import './index.css';
import './pages/App.css';


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}


/*ReactDOM.render(
    <App />,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
