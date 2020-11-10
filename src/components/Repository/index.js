import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const C = ({ item, name, description}) => {
    return (
        <Card
            image={item.avatar_url}
            header={name}
            meta={item.login}
            description={description}
        />
    );
};

C.propTypes = {
    item: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default C;