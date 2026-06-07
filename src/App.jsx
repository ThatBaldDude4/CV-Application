import { useState } from 'react';
import Contact from './Contact';
import './App.css';
const intialFormData = {
  submitted: false,
  contact: {
    firstName: "",
    lastName: "",
    suffix: "",
    email: "",
    phone: "",
    linkedin: "",
    github: ""
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
    }
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "",
      startDate: "",
      endDate: "",
      skills: ""
    }
  ]
};

function App() {
  const [formData, setFormData] = useState(intialFormData);

  function handleContactField(field, value) {
    setFormData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value,
      }
    }));
  };

  return (
    <>
      {!formData.submitted && <Contact handleContactField={handleContactField} contact={formData.contact} />}
      <h2>Full Name: {formData.contact.firstName + " " + formData.contact.lastName + " " + formData.contact.suffix}</h2>
    </>
  )
}

export default App
