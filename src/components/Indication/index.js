// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import { Container } from 'semantic-ui-react';

// Composant 
const Indication = () => {
    return (
        <Container className="indication-container">La recherche a donné 2 résultats</Container>
    );
};

Indication.propTypes = {
};

export default Indication;