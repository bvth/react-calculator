import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore} from "redux";

import reducers from "./redux_reducers";

import App from './components/App';
import './style/index.scss';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
