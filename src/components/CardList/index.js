// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import { Container, Card } from 'semantic-ui-react';

// Composant 
const CardList = () => {
    return (
        <Container className="list-items">
            <Card
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />
            <Card
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />
            <Card
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />
        </Container>
    );
};

CardList.PropTypes = {
};

export default CardList;