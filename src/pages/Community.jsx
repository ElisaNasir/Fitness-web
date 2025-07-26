import React from 'react'
function Community(){
    return(
        <div className="community-container">
      <div className="report-box">
        <div className="report-title">
          <h2>Reported Content</h2>
        </div>
        <table className="report-table">
          <thead>
            <tr>
              <th>TYPE</th>
              <th>REPORTED ITEM</th>
              <th>REASON</th>
              <th>REPORTED BY</th>
              <th>REPORT TIME</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Post</strong></td>
              <td>"Text content..."</td>
              <td>Spam</td>
              <td>user123</td>
              <td>10 Jun, 10:45 AM</td>
              <td><span className="status reviewed">Reviewed</span></td>
              <td>
                <button className="action-btn block">Block User</button>
              </td>
            </tr>
            <tr>
              <td><strong>Comment</strong></td>
              <td>"Bad comment..."</td>
              <td>Abuse</td>
              <td>user789</td>
              <td>10 Jun, 11:00 AM</td>
              <td><span className="status pending">Pending</span></td>
              <td>
                <button className="action-btn ignore">Ignore</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}
export default Community