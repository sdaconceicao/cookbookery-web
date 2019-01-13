import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import {Form, Forms} from 'sad-shared-components';

export class Preferences extends Component {

    state = {
        themeOptions: [
            {value: 'red', label: 'Red'},
            {value: 'blue', label: 'Blue'},
            {value: 'dark', label: 'Dark'}
        ]
    };

    onSubmit = (e) =>{
        console.log("Saving", e);
    };

    render() {
        const {theme, themeOptions} = this.state;
        return (
            <div className='preferences'>
                <h1><FormattedMessage id='preferences.title'/></h1>
                <Form onSubmit={this.onSubmit}>
                    <Forms.Select id="select"
                                     name="theme"
                                     options={themeOptions}
                                     label={<FormattedMessage id='preferences.theme'/>}
                                     value={theme}/>
                    <Forms.Button type="submit">
                        <FormattedMessage id='common.save'/>
                    </Forms.Button>
                </Form>
            </div>
        );
    }
}

export default Preferences;
