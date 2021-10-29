import React from 'react'
import { Table,Button } from 'react-bootstrap'
import styled from 'styled-components'

const UserTableContainer = styled.div`
    margin: 4% 36% 10% 30%;;
`;

const UserTable = props => (
    <UserTableContainer>
        <Table striped bordered hover striped={false}>
            
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>
                                <Button variant="warning"
                                    onClick={() => {
                                        props.editRow(user)
                                    }}
                                    className="button muted-button"
                                >
                                    Edit
                                </Button>{' '}
                                <Button variant="danger"
                                    onClick={() => props.deleteUser(user.id)}
                                    className="button muted-button"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
            </tbody>
        </Table>
    </UserTableContainer>
)

export default UserTable
