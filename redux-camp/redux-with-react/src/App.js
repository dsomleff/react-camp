import {Fragment} from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Counter from './components/counter-redux-toolkit/Counter';

function App() {
    return (
        <Fragment>
            <Header />
            <Auth />
            <Counter />
        </Fragment>
    );
}

export default App;
