import React, {Component} from 'react';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <h2>Home page. Click the Example <a href="/products">link in the navbar</a>
                    {this.props.test}

                </h2>
            </div>
        )
    }
}

export default Home