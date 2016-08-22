import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CountryApp from './containers/AppContainer';
import configureStore from './containers/store/AppStore';

const store = configureStore();

class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <CountryApp />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));