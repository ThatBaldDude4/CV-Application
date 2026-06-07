import { useState } from 'react';
import Contact from './Contact';
import './App.css';
const intialFormData = {
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
      <Contact
      handleContactField={handleContactField}
      />
      <h2>Full Name: {formData.contact.firstName + " " + formData.contact.lastName}</h2>
    </>
  )
}

export default App
