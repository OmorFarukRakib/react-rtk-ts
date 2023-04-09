import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks'
import { fetchUsers } from '../../redux'

type Props = {}

const Users = (props: Props) => {
    
    const users = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers('users'))
    }, [])

  return (
    <div>
        {users.loading ? 'Loading' : null}
        {users.users.length > 0 ? (<div>
            {users.users.map((user) => (
                <p> {user.id} - {user.name} </p>
        ))}
        </div>) : null}
    </div>
  )
}

export default Users