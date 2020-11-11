import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ModalTest from 'src/components/ModalTest';

const C = ({ item, name, description}) => {
    const extra = (
        <ModalTest />
    );

    return (
        <Card
            image={item.avatar_url}
            header={name}
            meta={item.login}
            description={description}
            extra={extra}
        />  
    );
};

C.propTypes = {
    item: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default C;