import React, { useState, useEffect } from "react";
import axios from "axios";

const ParentDashboard = ({ registrationId }) => {
  const path = `https://localhost:7019/api/Parents/${registrationId}`;
  const [parentData, setParentData] = useState({
    parentId: "",
    parentName: "",
    studentName: "",
    studentRegisterNumber: "",
    registrationId: "",
    address: "",
    state: "",
    country: "",
    city: "",
    zipCode: "",
    emailAddress: "",
    primaryContactPerson: "",
    primaryContactPersonMobile: "",
    secondaryContactPerson: "",
    secondaryContactPersonMobile: "",
    password: "",
    setPassword: "",
    status: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(path);
        setParentData(response.data);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [registrationId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParentData({
      ...parentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(path, parentData);
      alert("Data updated successfully");
    } catch (err) {
      alert("Error updating data");
    }
  };

  return (
    <div>
      <h1>Edit Parent Details</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="parentName"
            value={parentData.parentName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={parentData.studentName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="emailAddress"
            value={parentData.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={parentData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ParentDashboard;
