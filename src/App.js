import React, { useState } from "react";
import "./App.css";  

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(formData);
   };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "";

  return (
    <div className="animated-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="1" className="form-label">
          First name:
        </label>
        <input
          type="text"
          id="1"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className="form-input"
        />
        <label htmlFor="2" className="form-label">
          Last name:
        </label>
        <input
          type="text"
          id="2"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="form-input"
        />
        <label htmlFor="3" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="3"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="form-input"
        />
        <button
          type="submit"
          className={`submit-button glow-on-hover ${
            isFormValid ? "" : "move-button"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
