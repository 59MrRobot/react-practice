import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from '../api/users';

interface Props {
  setSelectedUser: React.Dispatch<React.SetStateAction<number>>;
}

export const Users: React.FC<Props> = ({ setSelectedUser }) => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    const loadedUsers = await getUsers();

    setUsers(loadedUsers);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link 
              to={String(user.id)}
              onClick={() => setSelectedUser(user.id)}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
