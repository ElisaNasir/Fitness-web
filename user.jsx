import React, {useState} from 'react'
import { AiFillEye } from 'react-icons/ai';
import vector from '/Vector.png';
import deleteicon from '/delete.png';
import eyeicon from '/eye.png';

const initialUsers = [
  {
    id: 1,
    name: 'John Willson',
    email: 'john@gmail.com',
    phone: '+78405057379',
    registered: 'Friday, July 26, 2023',
    gender: 'Male',
    status: 'Subscriber',
    dateOfBirth: '25-23-2020',
    weight: '50 KGs',
    height: '176 cms',
    subscription: 'Basic Gym Monthly',
    profileImage: '/profile-placeholder.jpg' // Add a placeholder or actual image path
  },
  {
    id: 2,
    name: 'Selena',
    email: 'selena@gmail.com',
    phone: '+78405057380',
    registered: 'Tuesday, Aug 5, 2023',
    gender: 'Female',
    status: 'Subscriber',
    dateOfBirth: '15-08-1995',
    weight: '55 KGs',
    height: '165 cms',
    subscription: 'Premium Gym Monthly',
    profileImage: '/profile-placeholder.jpg'
  },
];

function Users(){
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      handleDelete(selectedUser.id);
      handleCloseModal();
    }
  };

  return(
    <div className="users-container">
      <div className="user-card">
        <div className="user-header">
          <h2>User Information</h2>
          <div className="search-container">
           <img src={vector} alt="search" className="search-icon" />
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
                  <button onClick={() => handleViewUser(user)}><AiFillEye className="icon view" /></button>
                  <button onClick={() => handleDelete(user.id)}><img src={deleteicon} alt="delete" className="icon delete" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      {showModal && selectedUser && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="user-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>User Information</h2>
            </div>
            
            <div className="modal-content">
              <div className="user-profile-section">
                <div className="profile-image-container">
                  <img 
                    src={selectedUser.profileImage} 
                    alt={selectedUser.name}
                    className="profile-image"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzciIHI9IjE1IiBmaWxsPSIjOUI5Qjk4Ii8+CjxwYXRoIGQ9Ik0yNSA3NUMyNSA2Ni43MTU3IDMxLjcxNTcgNjAgNDAgNjBINjBDNjguMjg0MyA2MCA3NSA2Ni43MTU3IDc1IDc1VjgwSDI1Vjc1WiIgZmlsbD0iIzlCOUI5OCIvPgo8L3N2Zz4K';
                    }}
                  />
                </div>
                
                <div className="user-basic-info">
                  <h3 className="user-name">{selectedUser.name.toUpperCase()}</h3>
                  <p className="user-email">{selectedUser.email}</p>
                  <p className="user-phone">{selectedUser.phone}</p>
                  <span className="user-status-badge">SUBSCRIBER</span>
                </div>
              </div>

              <div className="user-details-section">
                <div className="user-details-grid">
                  <div className="left-column">
                    <div className="detail-item">
                      <label>DATE OF BIRTH</label>
                      <span>{selectedUser.dateOfBirth}</span>
                    </div>
                    
                    <div className="detail-item">
                      <label>WEIGHT</label>
                      <span>{selectedUser.weight}</span>
                    </div>
                    
                    <div className="detail-item">
                      <label>HEIGHT</label>
                      <span>{selectedUser.height}</span>
                    </div>
                    
                    <div className="detail-item">
                      <label>GENDER</label>
                      <span>{selectedUser.gender}</span>
                    </div>
                  </div>
                  
                  <div className="right-column">
                    <div className="detail-item subscription-item">
                      <label>SUBSCRIPTION</label>
                      <span>{selectedUser.subscription}</span>
                    </div>
                    
                    <div className="detail-item">
                      <label>REGISTERED ON</label>
                      <span>{selectedUser.registered}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="back-btn" onClick={handleCloseModal}>
                Back
              </button>
              <button className="delete-btn" onClick={handleDeleteUser}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Users