import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

export class Preferences extends Component {

    render() {

        return (
            <div className='preferences'>
                <h1><FormattedMessage id='preferences.title'/></h1>
            </div>
        );
    }
}

export default Preferences;
