import { useState } from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
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

  function handleArrayField(arrayName, id, field, value) {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].map((obj) => {
        if (obj.id === id) {
          return {...obj, [field]: value}
        }else {
          return obj;
        }
      })
    }))
  };

  function addItemToArray(arrayName, newItem) {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [
        ...prev[arrayName],
        newItem
      ]
    }))
  };

  function removeItemFromArray(arrayName, itemId) {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((obj) => obj.id !== itemId)
    }));
  }

  return (
    <>
      {!formData.submitted &&
        <> 
        <Contact handleContactField={handleContactField} contact={formData.contact} />
        <Education 
          education={formData.education} 
          handleArrayField={handleArrayField} 
          addItemToArray={addItemToArray}
          removeItemFromArray={removeItemFromArray}
        />
        <Experience 
          experience={formData.experience} 
          handleArrayField={handleArrayField} 
          addItemToArray={addItemToArray}
          removeItemFromArray={removeItemFromArray}
        />
        </>
      }
      <h2>Full Name: {formData.contact.firstName + " " + formData.contact.lastName + " " + formData.contact.suffix}</h2>

      {/* this is testing the education form */}
    </>
  )
}

export default App
