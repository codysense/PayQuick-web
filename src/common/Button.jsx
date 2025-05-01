import React from "react";

const Button = ({ caption, type, ...rest }) => {


  // let classDef = "mt-4  m-2 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4  rounded shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800";
  //const classDef = "mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
    // type === "submit"
    //   ? classDef =
    //       "mt-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold  rounded shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800"
    //   : classDef =
    //       " px-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:border-2 hover:border-indigo-500 hover:rounded-lg";
  
  return (
    <>
      <button  {...rest} type={type} className="mt-4  m-2 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4  rounded shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800" >
        {caption}
      </button>
    </>
  );
};

export default Button;
