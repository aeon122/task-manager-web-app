// src/components/ContactForm.js
import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TEMP: Log to console
    console.log('Submitted:', form);
    alert('Form submitted! Thank you.');
    setForm({ firstName: '', lastName: '', email: '', comments: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-6">
        <input
          className="form-control"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-6">
        <input
          className="form-control"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <textarea
          className="form-control"
          name="comments"
          placeholder="Comments"
          rows="4"
          value={form.comments}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12">
        <button className="btn btn-success" type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
