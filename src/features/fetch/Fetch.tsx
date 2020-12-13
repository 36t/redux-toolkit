import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { loadUsers, selectUsers } from './fetchSlice'

const Fetch: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  useEffect(() => {
    dispatch(loadUsers())
  }, [dispatch])

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  )
}

export default Fetch
