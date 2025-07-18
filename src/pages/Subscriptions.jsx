import React, {useState} from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi';
function Subscriptions(){
     const [plans, setPlans] = useState([
    { id: 1, name: 'Basic Plan', monthly: 9.99, yearly: 80 },
    { id: 2, name: 'Premium Plan', monthly: 14.99, yearly: 120 }
  ]);

  const [editingPlan, setEditingPlan] = useState(null);
  const [deletingPlan, setDeletingPlan] = useState(null);
   const [addModalOpen, setAddModalOpen] = useState(false);
  const [newPlan, setNewPlan] = useState({ name: '', price: '', description: '' });

  const handleEditSave = () => {
    const updatedPlans = plans.map(plan =>
      plan.id === editingPlan.id ? editingPlan : plan
    );
    setPlans(updatedPlans);
    setEditingPlan(null);
  };

  const handleDelete = () => {
    setPlans(plans.filter(plan => plan.id !== deletingPlan.id));
    setDeletingPlan(null);
  };

  const handleAddSubscription = () => {
    const id = plans.length ? plans[plans.length - 1].id + 1 : 1;
    const newSubscription = { ...newPlan, id, yearly: newPlan.monthly * 10 };
    setPlans([...plans, newSubscription]);
    setAddModalOpen(false);
    setNewPlan({ name: '', monthly: '', description: '' });
  };

    return(
      <>
      <div className="subscription-container">
        <div className="subscription-header">
          <h2 className="subscription-heading">Our Subscription Plans</h2>
          <button className="add-subscription-btn" onClick={() => setAddModalOpen(true)}>
            + Add Subscription
          </button>
        </div>

        {plans.map(plan => (
          <div key={plan.id} className="subscription-box">
            <strong className="plan-title">{plan.name}</strong>
            <div className="price-block">
              <div>Monthly</div>
              <div>${plan.monthly}</div>
            </div>
            <div className="price-block">
              <div>Yearly</div>
              <div>${plan.yearly}</div>
            </div>
            <div className="icon-block">
              <span className="icon-circle" onClick={() => setEditingPlan(plan)}>
                <FiEdit className="action-icon" />
              </span>
              <span className="icon-circle" onClick={() => setDeletingPlan(plan)}>
                <FiTrash2 className="action-icon" />
              </span>
            </div>
          </div>
        ))}

        {editingPlan && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Edit {editingPlan.name}</h3>
              <label>Monthly Price</label>
              <input
                type="number"
                value={editingPlan.monthly}
                onChange={e => setEditingPlan({ ...editingPlan, monthly: e.target.value })}
              />
              <label>Yearly Price</label>
              <input
                type="number"
                value={editingPlan.yearly}
                onChange={e => setEditingPlan({ ...editingPlan, yearly: e.target.value })}
              />
              <div className="modal-buttons">
                <button className="confirm-btn" onClick={handleEditSave}>Save</button>
                <button className="cancel-btn" onClick={() => setEditingPlan(null)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {deletingPlan && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Delete {deletingPlan.name}?</h3>
              <p>Are you sure you want to delete this plan?</p>
              <div className="modal-buttons">
                <button className="confirm-btn" onClick={handleDelete}>Confirm</button>
                <button className="cancel-btn" onClick={() => setDeletingPlan(null)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {addModalOpen && (
          <div className="modal-overlay">
            <div className="modal add-modal add-subscription-modal">
              <h3> Add Subscription</h3>
              <label>Subscription Name</label>
              <input
                type="text"
                value={newPlan.name}
                placeholder="ABC"
                onChange={e => setNewPlan({ newPlan, name: e.target.value })}
              />
              <label>Price $</label>
              <input
                type="number"
                value={newPlan.monthly}
                placeholder="$$$"
                onChange={e => setNewPlan({ newPlan, monthly: e.target.value })}
              />
              <label>Description</label>
              <textarea
                value={newPlan.description}
                placeholder="What's included in the plan?"
                onChange={e => setNewPlan({ newPlan, description: e.target.value })}
              />
              <button className="add-btn" onClick={handleAddSubscription}>Add Subscription</button>
              <button className="update-btn" onClick={() => setAddModalOpen(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>

      <div className="Sub-container">
        <div className="Pay-box">
          <h2 className="Pay-title">Payment Information</h2>
          <table className="Pay-table">
            <thead>
              <tr>
                <th>SL</th>
                <th>USER</th>
                <th>PLAN</th>
                <th>DATE SUBSCRIBED</th>
                <th>PAYMENT</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1</strong></td>
                <td>"John"</td>
                <td>Lite Plan</td>
                <td>July 23, 2023</td>
                <td><span className="status-paid">PAID</span></td>
                <td>
                  <button className="status-active">ACTIVE</button>
                </td>
                <td>⋮</td>
              </tr>
              <tr>
                <td><strong>2</strong></td>
                <td>"Selena"</td>
                <td>Premium Plan</td>
                <td>Aug 5,2023</td>
                <td><span className="status-pending1">Pending</span></td>
                <td>
                  <button className="status-expired">EXPIRED</button>
                </td>
                <td>⋮</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default Subscriptions