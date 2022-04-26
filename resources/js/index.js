import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from "./components/App";
import store from "./redux/store";


if (document.getElementById('frontend_content')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('frontend_content'));
}
