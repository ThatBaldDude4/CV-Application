import './App.css';
export default function FinalForm({formData}) {
    return (
        <div className="form-container">
            <h1>
                {(formData.contact.firstName && formData.contact.lastName) &&
                `${formData.contact.firstName} ${formData.contact.lastName} ${formData.contact.suffix}`
                }
            </h1>
            <div className="contact-container">
                <div className="email-container">
                    {formData.contact.email}
                </div>
                <div className="phone-container">
                    {formData.contact.phone}
                </div>
                {formData.contact.linkedin?.length > 0 &&
                    <div className="linkedin-container">
                        {formData.contact.linkedin}
                    </div>
                }
                {formData.contact.github?.length > 0 &&
                    <div className="github-container">
                        {formData.contact.github}
                    </div>
                }
            </div>
        </div>
    )
};