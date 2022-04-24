import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App";


if (document.getElementById('frontend_content')) {
    ReactDOM.render(<App />, document.getElementById('frontend_content'));
}
