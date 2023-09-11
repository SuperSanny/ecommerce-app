import React from "react";

const CustomInput = (props) => {
  const { type, name, id, placeholder, className } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`form-control ${className}`}
      />
    </>
  );
};

export default CustomInput;
