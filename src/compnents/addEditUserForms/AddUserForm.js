import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const AddUserFormContainer = styled.div`
    width: 50%;
    margin-left: 24%;
    margin-top: 2%;
    display: flex;
`;

const AddUserForm = props => {
    const initialFormState = { id: null, name: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <Form onSubmit={event => {
                event.preventDefault()
                if (!user.name) return
                props.addUser(user)
                setUser(initialFormState)
            }}
            >
                <AddUserFormContainer>
                    <Form.Control type="text" name="name" placeholder="New Task" value={user.name} onChange={handleInputChange} >
                    </Form.Control>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </AddUserFormContainer>

            </Form>
        </>
    )
}

export default AddUserForm
