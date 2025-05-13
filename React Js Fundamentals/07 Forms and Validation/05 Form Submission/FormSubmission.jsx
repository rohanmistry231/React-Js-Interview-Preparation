import React, { useState } from 'react';

// Main Learning Points: Form Submission
// Collect form data and simulate submission (logging to console).
const FormSubmission = () => {
    const [formData, setFormData] = useState({ name: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
        alert('Form submitted! Check the console for details.');
    };

    return (
        <div>
            <h2>Form Submission</h2>
            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
            </div>
            <div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="3"
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default FormSubmission;