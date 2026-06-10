export const initialFormData = {
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

const filledIntialData = {
  submitted: false,
  contact: {
    firstName: "Taylor",
    lastName: "Vannattan",
    suffix: "",
    email: "JohnDoe@gmail.com",
    phone: "8161234567",
    linkedin: "",
    github: ""
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "Harvard",
      degree: "Doctorate",
      completionDate: "2005-08-12",
    }
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      title: "Mechanic",
      company: "MJ Avaition",
      startDate: "2008-12-08",
      endDate: "2010-10-02",
      skills: "Loads of skills, like tons, i did this, did that, did it all really"
    }
  ]
}

export { filledIntialData as initialFormData2 };