import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/configStore";
import { AppContainer } from "./AppContainer";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
