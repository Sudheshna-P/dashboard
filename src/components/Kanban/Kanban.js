import React, { useState } from 'react';
import './Kanban.css';

const initialTasks = {
  todo: ['Task 1', 'Task 2'],
  inProgress: ['Task 3'],
  done: ['Task 4']
};

const Kanban = () => {
  const [tasks] = useState(initialTasks);

  return (
    <div className="kanban">
      <h2>Kanban Board</h2>
      <div className="columns">
        {Object.keys(tasks).map((col) => (
          <div key={col} className="column">
            <h3>{col.toUpperCase()}</h3>
            {tasks[col].map((task, idx) => (
              <div key={idx} className="task">{task}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
