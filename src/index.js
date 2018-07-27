import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './share/containers/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

const app = (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
