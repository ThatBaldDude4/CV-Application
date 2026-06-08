import {useState} from 'react';

export default function Contact({handleContactField, contact}) {
    const [showMoreContact, setShowMoreContact] = useState(false);

    return (
        <section className="contact-section">
            <h2>Contact:</h2>
            <label>
                First Name:
                <input type="text" value={contact.firstName} onChange={(e) => {handleContactField("firstName", e.target.value)}}/>
            </label>
            <label>
                Last Name:
                <input type="text" value={contact.lastName} onChange={(e) => {handleContactField("lastName", e.target.value)}}/>
            </label>
            <label>
                Suffix:
                <select value={contact.suffix} onChange={(e) => {handleContactField("suffix", e.target.value)}}>
                    <option value="">Select a Suffix</option>
                    <option value="Sr">Sr</option>
                    <option value="Jr">Jr</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                </select>
            </label>
            <label>
                Email:
                <input type="email" value={contact.email} onChange={(e) => {handleContactField("email", e.target.value)}}/>
            </label>
            <label>
                Phone Number:
                <input type="tel" value={contact.phone} onChange={(e) => {handleContactField("phone", e.target.value)}}/>
            </label>
            <button type="button" onClick={() => {setShowMoreContact(prev => !prev)}}>+ Additional Contact +</button>

            {showMoreContact && 
                <>
                    <label>
                        Github:
                        <input type="text" value={contact.github} onChange={(e) => {handleContactField("github", e.target.value)}} />
                    </label>
                    <label>
                        Linkedin:
                        <input type="text" value={contact.linkedin} onChange={(e) => {handleContactField("linkedin", e.target.value)}} />
                    </label>
                </>
            }
        </section>
    )
};