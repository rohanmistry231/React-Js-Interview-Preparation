import React from 'react';
import { useForm } from 'https://cdn.jsdelivr.net/npm/react-hook-form@7.49.3/dist/index.umd.js';

// Main Learning Points: Form Libraries (React Hook Form)
// React Hook Form simplifies form management with minimal re-renders.
const FormLibrary = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('React Hook Form Data:', data);
    };

    return (
        <div>
            <h2>Form Library (React Hook Form)</h2>
            <div>
                <input
                    {...register('username', { required: 'Username is required' })}
                    placeholder="Username"
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
            </div>
            <div>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'Invalid email address',
                        },
                    })}
                    placeholder="Email"
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <button onClick={() => handleSubmit(onSubmit)()}>Submit</button>
        </div>
    );
};

export default FormLibrary;