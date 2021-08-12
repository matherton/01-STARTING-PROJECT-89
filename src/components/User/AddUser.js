import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUserName, setEnteredUserName] = useState()
  const [enteredAge, setEnteredAge] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(+enteredAge < 1) {
      return;
    }
    //console.log(enteredUserName, enteredAge)
    props.onAddUser(enteredUserName, enteredAge)
    setEnteredUserName('')
    setEnteredAge('')
  }

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return(
    <>
    <ErrorModal title="An Error Occurred" message="Something went wrong!" />
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUserName} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  )
}

export default AddUser