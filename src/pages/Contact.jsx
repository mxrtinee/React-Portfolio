import { useState } from 'react';

export default function Contact() {
  // State for form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset errors when user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  // Handle blur event to check for required fields
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setFormErrors({
        ...formErrors,
        [name]: 'This field is required.',
      });
    }
  };

  // Validate email format on blur
  const validateEmail = (email) => {
    // Basic email validation, adjust as needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input blur to check for a valid email
  const handleEmailBlur = () => {
    const { email } = formData;
    if (email && !validateEmail(email)) {
      setFormErrors({
        ...formErrors,
        email: 'Invalid email address.',
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for required fields
    const requiredFields = ['name', 'email', 'message'];
    const newFormErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newFormErrors[field] = 'This field is required.';
      }
    });

    // Check for valid email
    if (formData.email && !validateEmail(formData.email)) {
      newFormErrors.email = 'Invalid email address.';
    }

    if (Object.keys(newFormErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form Data:', formData);
      // You can add your logic to send the form data to a server or display a success message
    } else {
      // Update formErrors state with new errors
      setFormErrors(newFormErrors);
    }
  };

  // JSX for the Contact component
  return (
    <div className="contact-container">
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        {/* Message Textarea */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}