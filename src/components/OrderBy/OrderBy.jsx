import React, {Fragment} from "react";
import {FormattedMessage} from "react-intl";

import {Select, Label} from "sad-shared-components";

export const OrderBy = ({onChange, value}) =>(
    <Fragment>
        <Label><FormattedMessage id="filters.orderBy"/></Label>
        <Select name="orderBy"
                value={value}
                options={[
                    {
                        label: <FormattedMessage id="recipe.title"/>,
                        value: 'title'
                    },
                    {
                        label: <FormattedMessage id="recipe.desc"/>,
                        value: 'desc'
                    }
                ]}
                onChange={onChange}/>
    </Fragment>
);

export default OrderBy;
