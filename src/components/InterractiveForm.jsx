import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

function InterractiveForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    occupation: "",
    completionDate: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full border border-gray-300 rounded p-2 mb-3";
   const buttonClass =
      "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2";
  return (
    <div className="mt-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center "
      >
        <div className="w-64 border border-gray-300 p-4 rounded">
          {step === 1 && (
            <>
              {/* Name input feed */}

              <Input id="name" label="Name:" type="text" name="name" value={formData.name} onChange={handleChange}/>
              {/* <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              /> */}

              {/* Number input feed */}
              <label htmlFor="number">Number:</label>
              <input
                name="number"
                type="text"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className={inputClass}
              />

              {/* Number input feed */}
              <label htmlFor="occupation">Occupation:</label>
              <input
                name="occupation"
                type="text"
                id="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className={inputClass}
              />

              {/* <button type="button" onClick={nextStep} className={buttonClass}>
                Next
              </button> */}

              <Button type="button" caption="Next" onClick={nextStep}/>
            </>
          )}

          {step === 2 && (
            <>
              {/* Date of Completion */}
              <div>
                <label htmlFor="completionDate">Date of Completion:</label>
                <input
                  type="date"
                  id="completionDate"
                  name="completionDate"
                  value={formData.completionDate}
                  onChange={handleChange}
                  className={inputClass}
                />

                <Button type="button" caption="Previous"  onClick={prevStep}/>
                <Button type="button" caption="Next" onClick={nextStep}/>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {/* Projects input field */}

              <div>
                <label htmlFor="projectDetails">Project Details:</label>
                <textarea
                  type="text"
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <Button type="button" caption="Previous"  onClick={prevStep}/>
              <Button type="submit" caption="Submit" />
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default InterractiveForm;
