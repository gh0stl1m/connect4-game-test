// External libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

// Service Wroker
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
