// src/pages/Contact.js
// Page containing a contact form
import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <h1 className="mb-4">Contact Us</h1>
      {/* Form component with controlled fields */}
      <ContactForm />
    </div>
  );
}

export default Contact;