import React from 'react';
import { useId } from 'react';

const Input = React.forwardRef(function Input({ 
    label, 
    id,
    type, 
    className = "", 
    ...props 
}, ref) {
    return (
        <div className="flex flex-col">
            {label && 
                <label htmlFor={id} className="mb-1 text-gray-700 font-medium">
                    {label}
                </label>
            }
            <input
                id={id}
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
            />
        </div>
    );
});

export default Input;
