import React, {useState} from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

 const initialUsers = [
  {
    id: 1,
    name: 'John Willson',
    email: 'john@gmail.com',
    phone: '+78405057379',
    registered: 'July 23, 2023',
    gender: 'Female',
    status: 'Subscriber'
  },
  {
    id: 2,
    name: 'Selena',
    email: 'john@gmail.com',
    phone: '+78405057379',
    registered: 'Aug 5, 2023',
    gender: 'Female',
    status: 'Subscriber'
  },
];

function Users(){
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
    return(
        <div className="users-container">
      <div className="user-card">
        <div className="user-header">
          <h2>User Information</h2>
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Ex : type by name" className="user-search" />
          </div>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>REGISTERED ON</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="bold-cell">{index + 1}</td>
                <td>{user.registered}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td><span className="status-badge">{user.status.toUpperCase()}</span></td>
                <td className="action-icons">
                  <button><AiOutlineEye className="icon view" /></button>
                  <button onClick={() => handleDelete(user.id)}><FiTrash2 className="icon delete" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}
export default Users