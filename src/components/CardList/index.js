// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Repository from 'src/components/Repository';

// Import
import { Card } from 'semantic-ui-react';

// Composant 
const CardList = ( {items} ) => {
    const cardListJSX = items.map((item) => {
        return (
            <Repository 
                item={item.owner} 
                {...item}
            />
        );
    });

    return (
        <Card.Group itemsPerRow={3}>
            {cardListJSX}
        </Card.Group>
    );
};

CardList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default CardList;