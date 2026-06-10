export default function Experience({experience, handleArrayField, addItemToArray, removeItemFromArray}) {
    const arrayName = "experience";
    const experienceList = experience.map((expObj) => {
            return (
                <div key={expObj.id} className="experience-list">
                    <label >
                        Company:
                        <input 
                            value={expObj.company} onChange={(e) => {
                                handleArrayField(arrayName, expObj.id, "company", e.target.value)
                            }}
                            type="text"
                        />
                    </label>
                    <label>
                        Title:
                        <input value={expObj.title} onChange={(e) => {
                            handleArrayField(arrayName, expObj.id, "title", e.target.value)
                        }}/>
                    </label>
                    <label>
                        Start Date:
                        <input 
                            value={expObj.startDate} onChange={(e) => {
                            handleArrayField(arrayName, expObj.id, "startDate", e.target.value)
                            }}
                            type="date"
                        />
                    </label>
                    <label>
                        End Date:
                        <input 
                            value={expObj.endDate} onChange={(e) => {
                            handleArrayField(arrayName, expObj.id, "endDate", e.target.value)
                            }}
                            type="date"
                        />
                    </label>
                    <label>
                        Skills:
                        <textarea 
                            maxLength="500" 
                            placeholder="add relevant skills and responsibilities"
                            value={expObj.skills}
                            onChange={(e) => {
                                handleArrayField(arrayName, expObj.id, "skills", e.target.value);
                            }}
                        >
                        </textarea>
                    </label>
                    <button type="button" onClick={() => {removeItemFromArray(arrayName, expObj.id)}}>Delete</button>
                </div>
            )
        });
    return (
        <div className="experience-container">
        <h2>Experience:</h2>
        <button type="button" onClick={() => {
            addItemToArray(arrayName, {
                id: crypto.randomUUID(),
                title: "",
                company: "",
                startDate: "",
                endDate: "",
                skills: ""
            })
        }}>Add experience</button>
        <section className="experience-section">
           {experienceList}
        </section>
        </div>
    )
}