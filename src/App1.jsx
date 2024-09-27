import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    resume: "",
    about: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!values.fullName) newErrors.fullName = "Full name is required.";
    if (!values.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!values.phone) newErrors.phone = "Phone number is required.";
    if (!values.gender) newErrors.gender = "Gender is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setSuccessMessage("Form submitted successfully!");
      // You can also log the values or send them to a backend
      console.log("Submitted Values: ", values);
    } else {
      setErrors(formErrors);
      setSuccessMessage(""); // Clear success message if form validation fails
    }
  };

  const ResetFunc = () => {
    setValues({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      resume: "",
      about: "",
    });
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={handleSubmit}>
            <h1>Register User</h1>

            <label htmlFor="fullName">Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={values.fullName}
              onChange={handleChanges}
              className={errors.fullName ? "error-input" : ""}
            />
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}

            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChanges}
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="phone">Phone No.*</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone No."
              value={values.phone}
              onChange={handleChanges}
              className={errors.phone ? "error-input" : ""}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}

            <label htmlFor="gender">Gender*</label>
            <div className="gender">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChanges}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChanges}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChanges}
                />
                Other
              </label>
            </div>
            {errors.gender && <p className="error-message">{errors.gender}</p>}

            <label htmlFor="resume">Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChanges}
            />

            <label htmlFor="about">About</label>
            <textarea
              name="about"
              placeholder="I'm a Computer Science Undergrad..."
              rows="3"
              value={values.about}
              onChange={handleChanges}
            ></textarea>

            <div className="btns">
              <button type="button" onClick={ResetFunc}>
                Reset
              </button>
              <button type="submit">Submit</button>
            </div>

            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        </div>

        <div className="overlay">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start your journey with us</p>
        </div>
      </div>

      <footer>
        <p>
          Created with <b><span>love</span></b> by Your Name
        </p>
      </footer>
    </div>
  );
}

export default App;
