import React from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';

export const TagsList = ({tags}) => (
    <div className='tags-list'>
        {tags.map(tag=>{
            return <Badge key={tag}>{tag}</Badge>
        })}
    </div>
);

TagsList.propTypes = {
    tags: PropTypes.array
};

export default TagsList;