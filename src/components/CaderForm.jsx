import React, { useState } from "react";
import PageTemplates from "../common/PageTemplates";
import { getDesignation, getEmployees } from "../utils/Employee";
import { toast } from "react-toastify";
import { add } from "../common/notifications";
import { useAuth } from "./AuthContext";
import { motion } from "framer-motion";
//import Deisgnation from "../pages/Deisgnation";

const CaderForm = () => {
  const designation = getDesignation();
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
        
    if (name === "id") {
      const searchDesignation = search(value);
      searchDesignation?
      setFormData((prevData) => {
        const data = {
          ...prevData,
          id: searchDesignation.id,
          name: searchDesignation.name,
        };
        return data;
      }):setFormData((prevData) => {
        const data = {
          ...prevData,
          id: value,
          name: "",
        };
        return data;})
    }
    // Update state
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      return updatedData;
    });
  };

  const [step, setStep] = useState(1);

  const redoStep = () => {
    setStep(1);
    setFormData({
      id: "",
      name: "",
    });
    // });
  };

  const populateRecipients = () => {
    const notificationRecipients = [];
    const employees = getEmployees().filter(
      (m) => m.cader === "Manager" || m.cader === "General Manager"
    );
    employees.map((m) =>
      m.department === "Finance" ||
      m.department === "Admin" ||
      m.department === formData.department
        ? notificationRecipients.push(m.StaffID)
        : ""
    );

    return notificationRecipients;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalDesignation = [...designation, formData];
    console.log(totalDesignation);
    const recipient = populateRecipients();
    const notification_details = ` New Designation \n Designation ID: ${formData.id} \n Designation Name: ${formData.name} \n Added by ${currentUser.fullname}.`;
    add("New Designation added", recipient, notification_details);
    toast.success(`${formData.name} designation is saved`);
  };

  // const handleTooltip = (text) => {
  //   <Tooltips text={text} />;
  // };

  const search = (id) => {
    const foundDesignation = designation.find((d) => d.id === id);
    return foundDesignation ? foundDesignation : null;
  };

  const caderFormTemplate = (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-12 sm:w-3/5 mx-auto rounded-3xl mb-6"
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
            <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
              {/* Name input field */}
              <input
                name="id"
                placeholder={"Designation ID"}
                // id="code"
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                onChange={handleChange}
                value={formData.id}
                type="text"
              />
              {/* {formState.errors.code && (
                <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                  {formState.errors.code}
                </div>
              )} */}

              <input
                name="name"
                placeholder={"Designation Name"}
                // id="code"
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                onChange={handleChange}
                value={formData.name}
                type="text"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                // onClick={nextStep}
                className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
              >
                Save
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
              <p>Designation Added</p>
            </div>
            <div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={redoStep}
                  className=" bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                >
                  Add Another Designation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );

  return (
    <div>
      <PageTemplates
        pageTitle={"Designation Form"}
        pageContent={caderFormTemplate}
      />
    </div>
  );
};

export default CaderForm;
