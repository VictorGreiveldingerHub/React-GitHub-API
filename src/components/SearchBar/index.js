// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import 
import { Form, Input, Segment } from 'semantic-ui-react';

// Composant 
const SearchBar = ({ handleChange, value, handleSubmit}) => {
    return (
        <Segment>
            <Form>
                <Form.Field>
                    <Input 
                        icon='search' 
                        iconPosition='left' 
                        placeholder='react'
                        value={value}
                        onChange={(e) => { handleChange(e.target.value)}}
                    />
                </Form.Field>
            </Form>
        </Segment>
    );
};

SearchBar.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;