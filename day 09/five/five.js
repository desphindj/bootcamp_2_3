import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudentData = () => {
    setLoading(true);
    setError(null); 

  
    fetch('/api/students')
      .then((response) => {
        if (!response.ok) {
          
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false); 
      })
      .catch((err) => {
        
        console.error('Fetch error:', err);
        setError('Oops! Something went wrong while fetching the student data. Please try again later.');
        setLoading(false); 
      });
  };

  useEffect(() => {
    fetchStudentData(); 
    const intervalId = setInterval(() => {
      fetchStudentData(); 
    }, 30000); 

    return () => clearInterval(intervalId); 
  }, []);

  if (loading) {
    return <div className="text-center">Loading student data...</div>; 
  }

  if (error) {
    
    return (
      <div className="alert alert-danger text-center">
        <strong>{error}</strong>
      </div>
    );
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
