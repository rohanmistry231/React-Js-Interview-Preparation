import React, { useState } from 'react';

// Main Learning Points: Handling Form Inputs
// Manage multiple form inputs using a single state object.
const FormInputs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <h2>Handling Form Inputs</h2>
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
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <button onClick={handleSubmit}>Log Form Data</button>
        </div>
    );
};

export default FormInputs;