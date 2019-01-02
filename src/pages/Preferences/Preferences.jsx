import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import {Form, Forms} from 'shared-components';

export class Preferences extends Component {

    state = {
        themeOptions: [
            {value: 'Red', label: 'Red'},
            {value: 'Blue', label: 'Blue'},
            {value: 'Dark', label: 'Dark'}
        ],
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
                    <Forms.Select id="textinput"
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
