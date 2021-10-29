import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components';

const AddUserFormContainer = styled.div`
    width: 50%;
    margin-left: 24%;
    margin-top: 2%;
    display: flex;
`;

const Space = styled.div`
    margin-right: 4px;
`;


const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <Form onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
            >
                <AddUserFormContainer>
                    <Form.Control type="text" placeholder="Edit Task" name="name" value={user.name} onChange={handleInputChange}>
                    </Form.Control><Space/>
                    <Button variant="primary" type="submit">
                        Update user
                    </Button><Space/>
                    <Button variant="danger" onClick={() => props.setEditing(false)}>Cancel</Button>
                </AddUserFormContainer>

            </Form>
        </>
    )
}

export default EditUserForm
