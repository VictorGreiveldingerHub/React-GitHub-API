import React from 'react';
// import PropTypes from 'prop-types';
import { Modal, Button, Header} from 'semantic-ui-react';

const C = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>More Description</Button>}
        >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
            <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
                We've found the following gravatar image associated with your e-mail
                address.
            </p>
            <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
            Nope
            </Button>
            <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
            />
        </Modal.Actions>
        </Modal>
    );
};

C.propTypes = {};

export default C;