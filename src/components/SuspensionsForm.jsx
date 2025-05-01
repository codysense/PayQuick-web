import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTemplates from "../common/PageTemplates";
import { maxDate, maxNextYear, minDate } from "../common/CurrentYearDates";
import { getEmployee, getEmployees } from "../utils/Employee";
import { toast } from "react-toastify";
import { add } from "../common/notifications";
import Input from "../common/Input";

const SuspensionsForm = () => {
  const [staffInfo, setStaffInfo] = useState(getEmployee("000"));
  const notificationRecipients = [];

  const [formData, setFormData] = useState({
    StaffID: "000",
    fullname: `${staffInfo.first_name} ${staffInfo.last_name}`,
    department: staffInfo.department,
    cader: staffInfo.cader,
    date_from: "",
    date_to: "",
    suspension_period: "",
    reason: "",
    status: "Active",
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
        updatedData.suspension_period = calculateDaysDifference(
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
  const employees = getEmployees().filter((m) => m.StaffID !== "000");

  const redoStep = () => {
    setStep(1);
    setFormData({
      StaffID: "",
      fullname: "",
      department: "",
      cader: "",
      date_from: "",
      date_to: "",
      suspension_period: "",
      reason: "",
      status: "Active",
    });
    // });
  };

  useEffect(() => {
    const selectedStaff = getEmployee(formData.StaffID);
    if (selectedStaff) {
      setStaffInfo(selectedStaff);
      setFormData((prevData) => ({
        ...prevData,
        fullname: `${selectedStaff.first_name} ${selectedStaff.last_name}`,
        department: selectedStaff.department,
        cader: selectedStaff.cader,
      }));
    }
  }, [formData.StaffID]);

  const populateRecipients = () => {
    const employees = getEmployees().filter((m) => m.cader === "Manager");
    employees.map((m) =>
      m.department === "Finance" ||
      m.department === "Admin" ||
      m.department === formData.department
        ? notificationRecipients.push(m.StaffID)
        : ""
    );

    return notificationRecipients.includes(formData.StaffID)
      ? notificationRecipients
      : notificationRecipients.push(formData.StaffID);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const totalLeaveRequests = [...leaveRequests, formData];

    const notification_details = `${formData.fullname}, ${formData.cader} in ${formData.department} department has been suspended from work between  ${formData.date_from} and ${formData.date_to} due to ${formData.reason} \n Kindly take note. `;
    add(
      "Suspension for " + formData.fullname,
      populateRecipients(),
      notification_details
    );
    toast.success("Suspension issued");
    redoStep();
  };

  const SuspensionFormTemplate = (
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
            className="md:w-4/5 mx-auto py-10"
          >
            {/* <div className="mt-2 ">
                  <CircularProgress
                    value={leaveBal}
                    totalCount={28}
                    label={"Leave Balance"}
                  />
                </div> */}

            <div className="grid max-w-2xl grid-cols-1  gap-x-2 sm:grid-cols-6 md:col-span-2">
              <select
                name={"StaffID"}
                value={formData.StaffID}
                onChange={handleChange}
                className="mt-4 border border-gray-300 rounded p-2 col-span-3"
              >
                <option value="000" disabled>
                  -- Select StaffID --
                </option>
                {employees.map((employee, index) => (
                  <option key={index}>{employee.StaffID}</option>
                ))}
              </select>
              <Input
                name={"fullname"}
                placeholder={"Fullname"}
                value={`${formData.fullname}`}
                onChange={handleChange}
              />
              <Input
                name={"cader"}
                placeholder={"Cader"}
                value={formData.cader}
                onChange={handleChange}
              />
              <Input
                name={"department"}
                placeholder={"Department"}
                value={formData.department}
                onChange={handleChange}
              />
              <Input
                name={"date_from"}
                type="date"
                readOnly={false}
                placeholder={"Date From"}
                min={minDate()}
                max={maxDate()}
                value={formData.date_from}
                onChange={handleChange}
              />
              <Input
                name={"date_to"}
                type="date"
                placeholder={"Date To"}
                value={formData.date_to}
                min={minDate()}
                max={maxNextYear()}
                onChange={handleChange}
              />
              <Input
                name={"suspension_period"}
                placeholder={"Period"}
                value={formData.suspension_period}
                onChange={handleChange}
              />
              <Input
                name={"reason"}
                placeholder={"Reason"}
                value={formData.reason}
                onChange={handleChange}
              />
              {/* <input
                    name="StaffID"
                    readOnly
                    // placeholder={"Department code"}
                    // id="code"
                    className="mt-4 sm:col-span-full border border-gray-300 rounded p-2"
                    onChange={handleChange}
                    value={formData.StaffID}
                    type="text"
                  /> */}

              {/* {formState.errors.code && (
                  <div className="text-white sm:col-span-full box-border bg-red-600 rounded p-1">
                    {formState.errors.code}
                  </div>
                )} */}

              {/* <input
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
                  /> */}

              {/* <textarea
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
                  ></textarea> */}
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
                Issue Suspension
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
            className="md:w-4/5 mx-auto py-12"
          >
            <div className="mt-12 text-4xl  text-center">
              Suspension Issued.
            </div>
            <div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={redoStep}
                  className=" bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                >
                  Issue another Suspension
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
        pageTitle={"Suspension Form"}
        pageContent={SuspensionFormTemplate}
      />
    </div>
  );
};

export default SuspensionsForm;
