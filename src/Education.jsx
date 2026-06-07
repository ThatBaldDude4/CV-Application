import { useState } from 'react';

export default function Education({education, handleArrayField, addItemToArray, removeItemFromArray}) {
    const arrayName = "education";
    const educationList = education.map((eduObj) => {
            return (
                <div key={eduObj.id} className="education-list">
                    <label>
                        School:
                        <input value={eduObj.school} onChange={(e) => {
                            handleArrayField(arrayName, eduObj.id, "school", e.target.value)
                        }}/>
                    </label>
                    <label>
                        Degree:
                        <input value={eduObj.degree} onChange={(e) => {
                            handleArrayField(arrayName, eduObj.id, "degree", e.target.value)
                        }}/>
                    </label>
                    <button type="button" onClick={() => {removeItemFromArray(arrayName, eduObj.id)}}>Delete Data</button>
                </div>
            )
        });

    return (
        <>
        <h2>Education:</h2>
        <button type="button" onClick={() => {
            addItemToArray(arrayName, {id: crypto.randomUUID(), school: "", degree: ""})
        }}>Add Education</button>
        {educationList}
        </>
    )
};