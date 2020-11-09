// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import { Container, Card } from 'semantic-ui-react';

// Composant 
const CardList = ( {items} ) => {
    const cardListJSX = items.map((item) => {
        return (
            <Card
                key={item.id}
                image={item.owner.avatar_url}
                header={item.name}
                meta={item.owner.login}
                description={item.description}
            />
        );
    });
    return (
        <Card.Group itemsPerRow={3} stackable>
            {cardListJSX}
        </Card.Group>
    );
};

CardList.PropTypes = {
};

export default CardList;