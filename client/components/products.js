import React, {Component} from 'react';
import { connect } from 'react-redux'

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
Products = connect()(Products)
export default Products