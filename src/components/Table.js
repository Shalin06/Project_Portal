import React from 'react';
import {  useNavigate } from 'react-router-dom';

function Table({ data }) {
  const navigate = useNavigate();
  let columns = data.length > 0 ? Object.keys(data[0]) : [];

  // Rename the columns
  const renamedColumns = {
    deadline: 'Due Date',
    department: 'Department',
    email: 'Email',
    numStudents: 'Number of Students',
    profname: 'Professor',
    projectName: 'Project',
    remark: 'Remarks',
    vacancy: 'Vacancy',
  };

  // Add new column "Apply for Project"

  columns = [    
    "projectName",    
    "profname",  
    "email",  
    "department",    
    "numStudents", 
    "vacancy",
    "deadline", 
    "remark",
    "apply" // Add a new column for the Apply button
  ];
  renamedColumns['apply'] = 'Apply for Project';
  const cellStyle = {
    padding: '12px',
    border: '1px solid #ddd',
  };
  return (
    <table cellSpacing="0">
      <thead>
        <tr>
          {columns.map((colName, index) => (
            <th key={index}>{renamedColumns[colName]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((colName, index) => {
              if (colName === 'apply') {
                return (
                  <td key={index} style={cellStyle}>
                    <button onClick={() => navigate("signup")}>Apply</button>
                  </td>
                );
              } else {
                return (
                  <td key={index}>{item[colName]}</td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
