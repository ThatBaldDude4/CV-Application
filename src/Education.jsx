export default function Education({education, handleArrayField, addItemToArray, removeItemFromArray}) {
    const arrayName = "education";
    const educationList = education.map((eduObj) => {
            return (
                <div key={eduObj.id} className="education-list">
                    <label >
                        School:
                        <input
                            value={eduObj.school} 
                            onChange={(e) => {
                                handleArrayField(arrayName, eduObj.id, "school", e.target.value)
                            }}
                            type="text"
                        />
                    </label>
                    <label>
                        Degree:
                        <input value={eduObj.degree} onChange={(e) => {
                            handleArrayField(arrayName, eduObj.id, "degree", e.target.value)
                        }}/>
                    </label>
                    <label>
                        Completion Date:
                        <input 
                            onChange={(e) => {
                                handleArrayField(arrayName, eduObj.id, "completionDate", e.target.value)
                            }}
                            type="date"
                            value={eduObj.completionDate} 
                        />
                    </label>
                    <button type="button" onClick={() => {removeItemFromArray(arrayName, eduObj.id)}}>Delete Data</button>
                </div>
            )
        });

    return (
        <>
        <h2>Education:</h2>
        <button type="button" onClick={() => {
            addItemToArray(arrayName, {
                id: crypto.randomUUID(),
                school: "",
                degree: "",
                completionDate: "",
            })
        }}>Add Education</button>
        <section className="education-section">
           {educationList}
        </section>
        </>
    )
};