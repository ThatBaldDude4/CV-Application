import './App.css';
export default function FinalForm({formData}) {
    return (
        <div className="form-container">
            <h1>
                {(formData.contact.firstName && formData.contact.lastName) &&
                `${formData.contact.firstName} ${formData.contact.lastName} ${formData.contact.suffix}`
                }
            </h1>
            <div className="contact-form-container">
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

            <div className="education-form-container">
                {formData.education.map((data) => {
                    return <div key={data.id}>
                        <div>{data.school}</div>
                        <div>{data.degree}</div>
                        <div>{data.completionDate}</div>
                    </div>
                })}
            </div>

            <div className="experience-form-container">
                {formData.experience.map((data) => {
                    return <div key={data.id}>
                        <div>{data.title}</div>
                        <div>{data.company}</div>
                        <div>{data.startDate}</div>
                        <div>{data.endDate}</div>
                        <div>{data.skills}</div>
                    </div>
                })}
            </div>
        </div>
    )
};