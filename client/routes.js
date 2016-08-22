import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Home from './components/home';
//import Products from './components/products';

class Products extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <h2>Here is product page</h2>
            </div>
        )
    }
}

module.exports = (
    <Route path="/" component={Home}>
        <Route path="products" component={Products} />
    </Route>
);
//<Route path="/hero/:name" component={Hero} />

