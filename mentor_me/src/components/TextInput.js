// src/components/TextInput.js
import React from 'react';

const TextInput = ({ value, onChange, placeholder = "Type here...", type = "text", ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
      style={{
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
      }}
    />
  );
};

export default TextInput;
