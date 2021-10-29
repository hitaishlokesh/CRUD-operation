import React, { Fragment, useState } from "react";
import { Navbar, Container, Form, InputGroup, FormControl } from "react-bootstrap"
import styled from "styled-components";
import AddUserForm from "../addEditUserForms/AddUserForm";
import EditUserForm from "../addEditUserForms/EditUserForm";
import UserTable from "../table/UserTable";

const MainHeadingContainer = styled.div`
margin-left: 20%;
margin-top: 6%;
font-size: 35px;
`;

const Index = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            ToDo List
          </Navbar.Brand>
        </Container>
      </Navbar>
      <MainHeadingContainer>
        ToDo List
      </MainHeadingContainer>
          {editing ? (
            <Fragment>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
    </>
  );
}

export default Index;
