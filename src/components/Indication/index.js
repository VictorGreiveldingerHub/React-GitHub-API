// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import { Container } from 'semantic-ui-react';

// Composant 
const Indication = ({nbr}) => {
    console.log(nbr);
    return (
        <Container className="indication-container">La recherche a donné {nbr.total_count} résultat</Container>
    );
};

Indication.PropTypes = {
};

export default Indication;