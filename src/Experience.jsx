export default function Experience({experience, handleArrayField, addItemToArray, removeItemFromArray}) {
    const arrayName = "experience";
    const experienceList = experience.map((expObj) => {
            return (
                <div key={expObj.id} className="experience-list">
                    <label >
                        Company:
                        <input 
                            value={expObj.school} onChange={(e) => {
                                handleArrayField(arrayName, expObj.id, "school", e.target.value)
                            }}
                            type="text"
                        />
                    </label>
                    <label>
                        Degree:
                        <input value={expObj.degree} onChange={(e) => {
                            handleArrayField(arrayName, expObj.id, "degree", e.target.value)
                        }}/>
                    </label>
                    <label>
                        Start Date:
                        <input 
                            value={expObj.startData} onChange={(e) => {
                            handleArrayField(arrayName, expObj.id, "startData", e.target.value)
                            }}
                            type="date"
                        />
                    </label>
                    <label>
                        Skills:
                        <textarea 
                            maxLength="500" 
                            placeholder="add relevant skills and responibilities"
                            onChange={(e) => {
                                handleArrayField(arrayName, expObj.id, "skills", e.target.value);
                            }}
                        >

                        </textarea>
                    </label>
                    <label>
                        End Date:
                        <input 
                            value={expObj.startData} onChange={(e) => {
                            handleArrayField(arrayName, expObj.id, "endData", e.target.value)
                            }}
                            type="date"
                        />
                    </label>
                    <button type="button" onClick={() => {removeItemFromArray(arrayName, expObj.id)}}>Delete</button>
                </div>
            )
        });
    return (
        <>
        <h2>Experience:</h2>
        <button type="button" onClick={() => {
            addItemToArray(arrayName, {id: crypto.randomUUID(), school: "", degree: ""})
        }}>Add experience</button>
        <section className="experience-section">
           {experienceList}
        </section>
        </>
    )
}