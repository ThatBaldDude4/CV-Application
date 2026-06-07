import { useState } from 'react'

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
    <h1>MY APP</h1>
  )
}

export default App
