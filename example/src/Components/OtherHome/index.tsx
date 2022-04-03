import React from 'react'
import { Link } from 'react-router-dom'
import { useUrlState } from '@jdirosa/use-urlstate'

interface User {
  name: string
  id: string
}

export const OtherHome = () => {
  const defaultUser: User = {
    name: 'james',
    id: '1234'
  }
  const [user, setUser] = useUrlState('user2', defaultUser)

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <p>Name: {user?.name}</p>
          <p>Id: {user?.id}</p>
          <Link to='/'>Home</Link>
        </header>
      </div>
    </>
  )
}
