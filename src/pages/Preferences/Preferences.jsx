import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Form, Button} from 'sad-shared-components';

import HeaderNav from "Components/HeaderNav";

export class Preferences extends Component {

    render() {
        return (
            <div className='preferences'>
                <Form onSubmit={this.onSubmit}>
                    <HeaderNav className="preferences__header">
                        <h2 className="header-nav__title col-9">
                            <FormattedMessage id='preferences.title'/>
                        </h2>
                        <div className="header-nav__controls col-3">
                            <Button className="secondary" onClick={this.handleBack}><FormattedMessage id="common.cancel"/></Button>
                            <Button type="submit" className="primary"><FormattedMessage id="common.save"/></Button>
                        </div>
                    </HeaderNav>
                    <div className="preferences__content">

                    </div>
                </Form>
            </div>
        );
    }
}

export default Preferences;
