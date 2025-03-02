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
    return <div className="text-center">Loading student data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student List</h1>
      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">
                  <strong>ID:</strong> {student.id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
