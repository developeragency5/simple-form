import React, { useState } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    source: "chat",  // default value
    computerBrand: "",
    computerModel: "",
    printerBrand: "",
    printerModel: "",
    diagnose: "yes",  // default value
    converted: "yes", // default value
    notInterested: "no", // default value
    prospect: "no", // default value
    agentName: "",
    passcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://simple-form-xfwp.onrender.com/api/data", formData);
      alert(response.data.message);
    } catch (err) {
      alert("Failed to submit: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <section className="container">
      <header>PRE SALE FORM</header>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>
            First Name <span className="required-field">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label>Middle Name</label>
          <input
            type="text"
            name="middleName"
            placeholder="Enter middle name"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label>
            Last Name <span className="required-field">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label>
            Email Address <span className="required-field">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label>
            Phone Number <span className="required-field">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label>
            Source <span className="required-field">*</span>
          </label>
          <div className="radio-buttons-container">
            <div className="radio-button">
              <input
                type="radio"
                name="source"
                value="inbound"
                checked={formData.source === "inbound"}
                onChange={handleChange}
              />
              <label>Inbound</label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="source"
                value="chat"
                checked={formData.source === "chat"}
                onChange={handleChange}
              />
              <label>Chat</label>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label>Computer/Laptop Brand</label>
          <input
            type="text"
            name="computerBrand"
            placeholder="Enter brand name"
            value={formData.computerBrand}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label>Computer/Laptop Model</label>
          <input
            type="text"
            name="computerModel"
            placeholder="Enter model"
            value={formData.computerModel}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label>Printer Brand</label>
          <input
            type="text"
            name="printerBrand"
            placeholder="Enter printer brand"
            value={formData.printerBrand}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label>Printer Model</label>
          <input
            type="text"
            name="printerModel"
            placeholder="Enter printer model"
            value={formData.printerModel}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <label>
            Diagnose <span className="required-field">*</span>
          </label>
          <div className="radio-buttons-container">
            <div className="radio-button">
              <input
                type="radio"
                name="diagnose"
                value="yes"
                checked={formData.diagnose === "yes"}
                onChange={handleChange}
              />
              <label>Yes</label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="diagnose"
                value="no"
                checked={formData.diagnose === "no"}
                onChange={handleChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label>
            Converted <span className="required-field">*</span>
          </label>
          <div className="radio-buttons-container">
            <div className="radio-button">
              <input
                type="radio"
                name="converted"
                value="yes"
                checked={formData.converted === "yes"}
                onChange={handleChange}
              />
              <label>Yes</label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="converted"
                value="no"
                checked={formData.converted === "no"}
                onChange={handleChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label>
            Not Interested <span className="required-field">*</span>
          </label>
          <div className="radio-buttons-container">
            <div className="radio-button">
              <input
                type="radio"
                name="notInterested"
                value="yes"
                checked={formData.notInterested === "yes"}
                onChange={handleChange}
              />
              <label>Yes</label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="notInterested"
                value="no"
                checked={formData.notInterested === "no"}
                onChange={handleChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label>
            Prospect <span className="required-field">*</span>
          </label>
          <div className="radio-buttons-container">
            <div className="radio-button">
              <input
                type="radio"
                name="prospect"
                value="yes"
                checked={formData.prospect === "yes"}
                onChange={handleChange}
              />
              <label>Yes</label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="prospect"
                value="no"
                checked={formData.prospect === "no"}
                onChange={handleChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label>
            Agent Name <span className="required-field">*</span>
          </label>
          <input
            type="text"
            name="agentName"
            placeholder="Enter agent name"
            value={formData.agentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label>
            Passcode <span className="required-field">*</span>
          </label>
          <input
            type="password"
            name="passcode"
            placeholder="Enter passcode"
            value={formData.passcode}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default App;
