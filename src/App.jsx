import { useState } from 'react';
import { initialFormData } from './initialFormData';
import validateForm from './ValidateForm';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import FinalForm from './FinalForm';
import './App.css';




function App() {
  const [formData, setFormData] = useState(initialFormData);
  const isSubmitted = formData.submitted;
  const formButtonText = isSubmitted ? "EDIT" : "SUBMIT";
  const isValid = validateForm(formData).length === 0;

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
      {formData.submitted &&
        <FinalForm formData={formData} />
      }
      <div className="toggle-view-button">
          <button type="button" onClick={() => {
            if (!isValid) {return}
            setFormData(prev => ({...prev, submitted: !prev.submitted}))
          }}>
          {formButtonText}
          </button>
      </div>
      
    </>
  )
}

export default App
