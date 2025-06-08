import React from 'react';
import './Tables.css';

const Tables = () => {
  return (
    <div className="tables">
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;