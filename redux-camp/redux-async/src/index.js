import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/configStore";
import { AppContainer } from "./AppContainer"; // for using Container Pattern
// import App from './App';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
        {/*<App/>*/}
    </Provider>,
    document.getElementById('root')
);
