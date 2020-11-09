// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import { Container } from 'semantic-ui-react';

// Composant 
const Indication = ( {data} ) => {
    return (
        <Container>La recherche a donné {data.total_count} résultats</Container>
    );
};

Indication.PropTypes = {
};

export default Indication;