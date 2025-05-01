import React, {  useState } from "react";
import { motion } from "framer-motion";
import { addDepartment } from "../utils/Employee";
import { toast } from "react-toastify";
import { getFormschema } from "../utils/FormValidation";
import PageTemplates from "../common/PageTemplates";
//import { getprofilePictures } from "../utils/Employee";

const Department = () => {
  const defaultFormData = [
    {
      code: "",
      name: "",
    },
  ];

  // const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState({
    formData: {
      code: "",
      name: "",
    },
    errors: {},
  });

 
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const redoStep = () => {
    setStep(1);
    setFormState({formData: {
      code: "",
      name: "",
    },
    errors: {},})
  };

  const validateField = (name, value) => {
    const fieldSchema = getFormschema().extract(name); // limit to only one field
    const { error } = fieldSchema.validate(value);

    return error ? error.message : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const errorMessage = validateField(name, value);

    setFormState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value },

      errors: {
        ...prevState.errors,
        [name]: errorMessage,
      },
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    //Validate and set form errors
    const { error } = getFormschema().validate(formState.formData, {
      abortEarly: false,
    });

    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });

      setFormState((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }));
    } else {
      try {
        const newDepartment = addDepartment(formState.formData);
        console.log(formState.formData)
        if (newDepartment) {
          nextStep();
          console.log(newDepartment);
          toast.success("New Department registered");
          setFormState({ formData: defaultFormData, errors: {} });
        } else {
          toast.error("Data already exist");
        }
      } catch (error) {
        console.error("Error adding department", error);
        toast.error("An unexpected error has occurred");
      }
    }
  };
   const DepartmentForm = <div>
          <form
            onSubmit={handleSubmit}
            className="mt-12 md:w-4/5 mx-auto rounded-3xl mb-6"
            style={{ backgroundColor: "#ebe9d8", opacity: 0.9 }}
          >
            {step === 1 && (
              <motion.div
                key={step} // Add this line
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="mt-12 text-3xl  text-center">
                  Department Information
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
                  {/* Name input field */}
                  <input
                    name="code"
                    placeholder={"Department code"}
                    // id="code"
                    className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                    onChange={handleChange}
                    value={formState.formData.code}
                    type="text"
                  />
                  {formState.errors.code && (
                    <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                      {formState.errors.code}
                    </div>
                  )}

                  <input
                    name="name"
                    placeholder={"Department Name"}
                    id="name"
                    className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                    onChange={handleChange}
                    value={formState.formData.name}
                    type="text"
                  />
                  {formState.errors.name && (
                    <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                      {formState.errors.name}
                    </div>
                  )}
                  {/* <select
                    id="department_name"
                    name="department_name"
                    onSelect={handleSelect}
                    className="mt-4 sm:col-span-full border border-gray-300 rounded p-2 text-gray-500"
                    value={formData.department_name}
                  >
                    <option>Department</option>
                    {departments.map((department) => (
                      <option key={department.code} value={formData.department_name}>
                        {department.name}
                      </option>
                    ))}
                  </select> */}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    // onClick={nextStep}
                    className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key={step} // Add this line
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="mt-12 text-4xl  text-center">
                  Department registration completed.
                </div>
                <div>
                  <div className="flex justify-center mt-12">
                    <button
                      type="button"
                      onClick={redoStep}
                      className=" bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Register New Department
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </form>
   </div>

  return (
    <div>
      <PageTemplates pageTitle={"Department Registration Form"} pageContent={DepartmentForm}/>
    </div>
  );
};

export default Department;
