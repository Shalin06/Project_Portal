import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

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
  columns = [    'projectName',    'profname',    'email',    'department',    'numStudents',    'vacancy',    'deadline',    'remark',    'apply']
   // Add a new column for the Apply button  ];
  renamedColumns['apply'] = 'Apply for Project'
  const cellStyle = {
    padding: '12px',
    border: '1px solid #ddd',
  };

  const handleSearch = (event) => {
    const { name, value } = event.target;
    setSearchQueries({ ...searchQueries, [name]: value });
    if (name === 'vacancy') {
      const newFilteredRows = data.filter((row) => {
        return Number(row.vacancy) >= Number(value);
      });
      setFilteredRows(newFilteredRows);
    }

    // If the vacancy field is empty, show all rows again
    if (name === 'vacancy' && value === '') {
      setFilteredRows(data);
    }
  };

  const [searchQueries, setSearchQueries] = useState({
    project: '',
    department: '',
    vacancy: '',
  });

  const [filteredRows, setFilteredRows] = useState(data);

  // Define state variables for sorting
  const [sortCriteria, setSortCriteria] = useState({
    column: 'numStudents',
    direction: 'desc',
  });
  const [sortColumn,setSortColumn] = useState()
  const [sortDirection,setSortDirection] = useState()

  const handleSort = (colName) => {
    // If the user clicks on the same column again, reverse the sort direction
    if (colName === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Otherwise, sort the data in ascending order
      setSortColumn(colName);
      setSortDirection('asc');
    }
  };
  
  // Sort the data based on the current sort column and direction
  const sortedRows = filteredRows.sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
  
    if (sortColumn === 'deadline') {
      // If sorting by deadline, parse the date string first
      const aDate = new Date(aValue);
      const bDate = new Date(bValue);
      if (aDate < bDate) return sortDirection === 'asc' ? -1 : 1;
      if (aDate > bDate) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    }
  
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Apply sorting to filtered rows

  useEffect(() => {
    const filteredRows = data.filter((row) => {
      return (
        row.projectName.toLowerCase().includes(searchQueries.project) &&
        row.department.toLowerCase().includes(searchQueries.department) &&
        row.vacancy.toString().includes(searchQueries.vacancy)
      );
    });
    setFilteredRows(filteredRows);
  }, [data, searchQueries.project, searchQueries.department, searchQueries.vacancy]);
  return (
    <>
      <form className="navbar_search00">
        <input
          style={{ marginBottom: '10px',marginRight:'10px'}}
          className='search_input'
          type="text"
          name="project"
          value={searchQueries.project}
          onChange={handleSearch}
          placeholder="Search Project"
        />
        <input
        style={{ marginBottom: '10px',marginRight:'10px'}}
         className='search_input'
          type="text"
          name="department"
          value={searchQueries.department}
          onChange={handleSearch}
          placeholder="Search Department"
        />
      </form>
      <table cellSpacing="0" className='content_table'>
        <thead>
          <tr>
            {columns.map((colName, index) => (
              <th  className='profession_details93' key={index} onClick={() => handleSort(colName)}>
              <Button variant='light'>{renamedColumns[colName]}</Button>
              {sortColumn === colName && (
                <FontAwesomeIcon
                  icon={sortDirection === 'asc' ? faSortUp : faSortDown}
                  className="sort-icon"
                />
              )}
            </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((item, index) => (
            <tr key={index} className='profession_details93'>
              {columns.map((colName, index) => {
                if (colName === 'apply') {
                  return (
                    <td key={index} style={cellStyle}>
                      <button
                        className="apply_button"
                        onClick={() => navigate('signup')}
                      >
                        Apply
                      </button>
                    </td>
                  );
                } else {
                  return <td key={index}>{item[colName]}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </>
  );
}
export default Table;