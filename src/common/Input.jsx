import React from "react";

const Input = ({ type ="text", placeholder, name, non_editable=false, ...rest  }) => {
  return (
    <>
      <input
        {...rest}
        type={type}
         placeholder={placeholder}
        name={name} // This should match your formData property
        readOnly={non_editable}
        className="col-span-3 mt-4 border border-gray-300 rounded p-2"
      />
    </>
  );
};

export default Input;
