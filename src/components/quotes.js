import React, { Component } from 'react';
import auth from '../hoc/auth';

class Quotes extends Component {

    render() {

        return(
            <div>
                <h1 className="center">
                    Movie quotes
                </h1>
                <h5>
                    VERY NICE, HOW MUCH??
                </h5>

            </div>
        )
    }
}

export default auth(Quotes);