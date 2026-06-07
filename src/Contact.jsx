import {useState} from 'react';

export default function Contact({handleContactField, contact}) {
    const [showMoreContact, setShowMoreContact] = useState(false);

    return (
        <section class="contact-section">
            <label>
                First Name:
                <input type="text" value={contact.firstName} onChange={(e) => {handleContactField("firstName", e.target.value)}}/>
            </label>
            <label>
                Last Name:
                <input type="text" onChange={(e) => {handleContactField("lastName", e.target.value)}}/>
            </label>
            <label>
                Suffix:
                <select onChange={(e) => {handleContactField("suffix", e.target.value)}}>
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
                <input type="email" onChange={(e) => {handleContactField("email", e.target.value)}}/>
            </label>
            <label>
                Phone Number:
                <input type="tel" onChange={(e) => {handleContactField("phone", e.target.value)}}/>
            </label>
            <button onClick={() => {setShowMoreContact(prev => !prev)}}>+ Additional Contact +</button>

            {showMoreContact && 
                <>
                    <label>
                        Github:
                        <input type="text" onchange={(e) => {handleContactField("github", e.target.value)}} />
                    </label>
                    <label>
                        Linkedin:
                        <input type="text" onchange={(e) => {handleContactField("linkedin", e.target.value)}} />
                    </label>
                </>
            }
        </section>
    )
};