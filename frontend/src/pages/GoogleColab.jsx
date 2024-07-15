import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [jobRole, setJobRole] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [predictedSalary, setPredictedSalary] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { //Running on http://127.0.0.1:5000
      const response = await axios.post('http://localhost:5000/predict_salary', {
        job_role: jobRole,
        work_location: workLocation
      });
      setPredictedSalary(response.data.predicted_salary);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Job Role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
        <input type="text" placeholder="Work Location" value={workLocation} onChange={(e) => setWorkLocation(e.target.value)} />
        <button type="submit">Predict Salary</button>
      </form>
      {predictedSalary && <p>Predicted Salary: ${predictedSalary.toFixed(2)}</p>}
    </div>
  );
};

export default App;
