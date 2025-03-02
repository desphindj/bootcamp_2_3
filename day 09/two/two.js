import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/students')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch students data');
        }
        return response.json();
      })
      .then(data => {
        setStudents(data);
        setLoading(false); 
      })
      .catch(err => {
        setError(err.message); 
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <div>Loading student data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name} <br />
            <strong>ID:</strong> {student.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
