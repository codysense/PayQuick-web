import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import PageTemplates from "../common/PageTemplates";
import CircularProgress from "./CircularProgress";
import { getAnnualLeaveBal, getManagerID } from "../utils/Employee";
import { maxDate, maxNextYear, minDate } from "../common/CurrentYearDates";
import { getLeaveRequets } from "../utils/Employee";
import { toast } from "react-toastify";
import { add } from "../common/notifications";


const LeaveForm = ({ currentUser, formSchema }) => {
  const leaveRequests = getLeaveRequets();
  // const defaultFormData = [
  //   {
  //     StaffID: currentUser._id,
  //     fullname: currentUser.fullname,
  //     // date_from:todayDate,
  //     // date_to: todayDate,
  //     leaveRequest:"",
  //     reason: "",
  //   },
  // ];

  // const [errors, setErrors] = useState({});
  // const [formState, setFormState] = useState({
  //   formData: {
  //     StaffID: currentUser._id,
  //     fullname: currentUser.fullname,
  //     date_from: "",
  //     date_to: "",
  //     leaveRequest: "",
  //     reason: "",
  //   },
  //   errors: {},
  // });

  const [formData, setFormData] = useState({
    StaffID: currentUser._id,
    fullname: currentUser.fullname,
    department: currentUser.department,
    cader: currentUser.role,
    date_from: "",
    date_to: "",
    leaveRequest: "",
    reason: "",
    status: "Pending",
  });

  const calculateDaysDifference = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);
      const diffTime = endDateObj - startDateObj;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays >= 0 ? diffDays : "Start date must earlier than end date"; // Ensure no negative values
    }
    return "Choose start and end dates";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update state
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      // Recalculate daysDifference if either date changes
      if (name === "date_from" || name === "date_to") {
        updatedData.leaveRequest = calculateDaysDifference(
          updatedData.date_from,
          updatedData.date_to
        );
      }

      return updatedData;
    });
  };

  const [step, setStep] = useState(1);

  // const nextStep = () => {
  //   setStep(step + 1);
  // };

  const redoStep = () => {
    setStep(1);
    setFormData({
      StaffID: currentUser._id,
      fullname: currentUser.fullname,
      date_from: "",
      date_to: "",
      leaveRequest: "",
      reason: "",
    });
    // });
  };

  // const validateField = (name, value) => {
  //   const fieldSchema = formSchema.extract(name); // limit to only one field
  //   const { error } = fieldSchema.validate(value);

  //   return error ? error.message : null;
  // };

  //console.log(new Date())

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   const errorMessage = validateField(name, value);

  //   setFormState((prevState) => ({
  //     ...prevState,
  //     formData: { ...prevState.formData, [name]: value },

  //     errors: {
  //       ...prevState.errors,
  //       [name]: errorMessage,
  //     },
  //   }));

  //   dateDifference(formState.formData.date_from, formState.formData.date_to);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalLeaveRequests = [...leaveRequests, formData];
    const recipient = [];
    const managerID = getManagerID();
    recipient.push(managerID);
    const notification_details = `${formData.fullname}, ${formData.cader} in ${formData.department} department applied for leave between ${formData.date_from} and ${formData.date_to} \n Kindly attend to it. `;
    add(
      "Leave request from " + currentUser.fullname,
      recipient,
      notification_details
    );
    toast.success("Leave request submitted, HR Manager will get back to you");

    //Validate and set form errors
    // const { error } = formSchema.validate(formState.formData, {
    //   abortEarly: false,
    // });

    // if (error) {
    //   const validationErrors = {};
    //   error.details.forEach((detail) => {
    //     validationErrors[detail.path[0]] = detail.message;
    //   });

    //   setFormState((prevState) => ({
    //     ...prevState,
    //     errors: validationErrors,
    //   }));
    // } else {
    //   try {
    //     const newDepartment = addDepartment(formState.formData);
    //     console.log(formState.formData)
    //     if (newDepartment) {
    //       nextStep();
    //       console.log(newDepartment);
    //       toast.success("New Department registered");
    //       setFormState({ formData: defaultFormData, errors: {} });
    //     } else {
    //       toast.error("Data already exist");
    //     }
    //   } catch (error) {
    //     console.error("Error adding department", error);
    //     toast.error("An unexpected error has occurred");
    //   }
    //}
  };

  const leaveBal = getAnnualLeaveBal(currentUser._id);

  // const handleTooltip = (text) => {
  //   <Tooltips text={text} />;
  // };

  const LeaveFormTemplate = (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-12 sm:w-2/5 mx-auto rounded-3xl mb-6"
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
            <div className="mt-2 ">
              <CircularProgress
                value={leaveBal}
                totalCount={28}
                label={"Leave Balance"}
              />
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
              {/* Name input field */}
              <input
                name="StaffID"
                readOnly
                // placeholder={"Department code"}
                // id="code"
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                onChange={handleChange}
                value={formData.StaffID}
                type="text"
              />
              {/* {formState.errors.code && (
                <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                  {formState.errors.code}
                </div>
              )} */}

              <input
                name="fullname"
                readOnly
                // placeholder={"Department code"}
                // id="code"
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                onChange={handleChange}
                value={formData.fullname}
                type="text"
              />
              {/* {formState.errors.code && (
                <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                  {formState.errors.code}
                </div>
              )} */}
              <Tooltip id="leave" opacity={1} />
              <input
                name="date_from"
                min={minDate()}
                max={maxDate()}
                required
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                onChange={handleChange}
                value={formData.date_from}
                type="date"
                data-tooltip-id="leave"
                data-tooltip-content={"Select Start Date"}
                data-tooltip-variant="info"
                title=""
              />
              {/* {formState.errors.date_from && (
                <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                  {formState.errors.date_from}
                </div>
              )} */}

              <input
                name="date_to"
                required
                min={minDate()}
                max={maxNextYear()}
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                onChange={handleChange}
                value={formData.date_to}
                type="date"
                data-tooltip-id="leave"
                data-tooltip-content={"Select End Date"}
                data-tooltip-variant="info"
                title=""
              />
              {/* {formState.errors.date_to && (
                <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                  {formState.errors.date_to}
                </div>
              )} */}

              <input
                name="leaveRequest"
                placeholder={"Number of days"}
                id="leaveRequest"
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                onChange={handleChange}
                value={formData.leaveRequest}
                type="text"
                readOnly
              />
              {/* {formState.errors.leaveRequest && (
                <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                  {formState.errors.leaveRequest}
                </div>
              )} */}

              <textarea
                name="reason"
                placeholder="Reason for the leave"
                value={formData.reason}
                onChange={handleChange}
                required
                className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                data-tooltip-id="leave"
                data-tooltip-content={"Provide reason for your leave"}
                title=""
                data-tooltip-variant="info"
              ></textarea>
              {/* {formState.errors.reason && (
                <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                  {formState.errors.reason}
                </div>
              )} */}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                // onClick={nextStep}
                className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
              >
                Request Leave
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
              Leave request submitted.
            </div>
            <div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={redoStep}
                  className=" bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                >
                  Request another Leave
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
        pageTitle={"Leave Request Form"}
        pageContent={LeaveFormTemplate}
      />
    </div>
  );
};

export default LeaveForm;
