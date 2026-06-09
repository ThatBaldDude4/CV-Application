const initialFormData = {
  submitted: false,
  contact: {
    firstName: "",
    lastName: "",
    suffix: "",
    email: "4",
    phone: "5",
    linkedin: "",
    github: ""
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      completionDate: "",
    }
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      skills: ""
    }
  ]
};

export default function validateForm(formData) {
  let allInvalidFields = [];
  const optionalFields = ["linkedin", "github", "suffix"];

  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === "boolean") {continue};

    if (Array.isArray(value)) {
      value.forEach((data) => {
        let result = isValidObject(data, optionalFields);
        
        result.forEach((field) => {
          allInvalidFields.push({
            section: key,
            id: data.id,
            field
          });
        })
      })
      continue;
    };

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      let result = isValidObject(value, optionalFields);
      result.forEach((field) => {
        allInvalidFields.push({
          section: key,
          field
        })
      })
    }
  };

  return allInvalidFields;
}

// loop over object and make sure its key: values aren't empty
// return all empty keys
function isValidObject(obj, optionalFields = []) {
    const invalidFields = [];
    for (const [key, value] of Object.entries(obj)) {
        if (value.length === 0 && !optionalFields.includes(key)) {
            invalidFields.push(key);
        }
    }
    return invalidFields;
}
