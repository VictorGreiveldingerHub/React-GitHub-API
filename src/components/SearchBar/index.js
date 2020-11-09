// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import 
import { Input, Container } from 'semantic-ui-react';

// Composant 
const SearchBar = () => {
    return (
        <Container>
            <Input icon='search' iconPosition='left' placeholder='Search...' />
        </Container>
    );
};

SearchBar.propTypes = {
};

export default SearchBar;