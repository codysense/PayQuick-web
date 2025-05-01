import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageTemplates from "../common/PageTemplates";
import { maxDate, maxNextYear, minDate } from "../common/CurrentYearDates";
import { getDesignation, getEmployee, getEmployees } from "../utils/Employee";
import { toast } from "react-toastify";
import { add } from "../common/notifications";
import Input from "../common/Input";
import { useAuth } from "./AuthContext";

const SalaryMatrixForm = () => {
  const cader = getDesignation();
  const notificationRecipients = [];
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({
    cader: "",
    basic: "",
    trans: "",
    house: "",
    clothing: "",
    meal: "",
    entertainment: "",
    medical: "",
    ce: "",
    leave: "",
    others: "",
    gross: "",
    relief: "",
    taxIncome: "",
    NSITF: "",
    ITF: "",
    pension: "",
    paye: "",
    debt: "",
    totalDed: "",
    netPay: "",
    specialBonus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update state
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
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
      cader: "",
      basic: "",
      trans: "",
      house: "",
      clothing: "",
      meal: "",
      entertainment: "",
      medical: "",
      ce: "",
      leave: "",
      others: "",
      gross: "",
      relief: "",
      taxIncome: "",
      NSITF: "",
      ITF: "",
      pension: "",
      paye: "",
      debt: "",
      totalDed: "",
      netPay: "",
      specialBonus: "",
    });
    // });
  };

  //   useEffect(() => {
  //     const selectedStaff = getEmployee(formData.StaffID);
  //     if (selectedStaff) {
  //       setStaffInfo(selectedStaff);
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         fullname: `${selectedStaff.first_name} ${selectedStaff.last_name}`,
  //         department: selectedStaff.department,
  //         cader: selectedStaff.cader,
  //       }));
  //     }
  //   }, [formData.StaffID]);

  const populateRecipients = () => {
    const employees = getEmployees().filter((m) => m.cader === "Manager");
    employees.map(
      (m) => m.department === "Finance" || m.department === "Admin"
    );

    return notificationRecipients;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const notification_details = `${formData.cader} salary matrix is saved. \n Added by ${currentUser.fullname} `;
    add(
      "Salary Matrix Notification",
      populateRecipients(),
      notification_details
    );
    toast.success("Salary matrix saved");
    redoStep();
  };

  const SalaryMatrixFormTemplate = (
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

            <div className="grid max-w-2xl grid-cols-1  gap-x-2 sm:grid-cols-9 md:col-span-3">
              <select
                name={"cader"}
                value={formData.cader}
                onChange={handleChange}
                className="mt-4 border border-gray-300 rounded p-2 col-span-3"
              >
                <option value="" disabled>
                  -- Select Cader --
                </option>
                {cader.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
              <Input
                name={"basic"}
                placeholder={"Basic"}
                value={`${formData.basic}`}
                onChange={handleChange}
              />
              <Input
                name={"trans"}
                placeholder={"Transportation Allowance"}
                value={formData.trans}
                onChange={handleChange}
              />
              <Input
                name={"housing"}
                placeholder={"House Allowance"}
                value={formData.house}
                onChange={handleChange}
              />
              <Input
                name={"clothing"}
                placeholder={"Clothing Allowance"}
                value={formData.clothing}
                onChange={handleChange}
              />
              <Input
                name={"meal"}
                placeholder={"Meal Allowance"}
                value={formData.meal}
                onChange={handleChange}
              />

              <Input
                name={"entertainment"}
                placeholder={"Entertainment Allowance"}
                value={formData.entertainment}
                onChange={handleChange}
              />

              <Input
                name={"medical"}
                placeholder={"Medical Allowance"}
                value={formData.medical}
                onChange={handleChange}
              />

              <Input
                name={"ce"}
                placeholder={"CE"}
                value={formData.ce}
                onChange={handleChange}
              />
              <Input
                name={"leave"}
                placeholder={"Leave Allowance"}
                value={formData.leave}
                onChange={handleChange}
              />
              <Input
                name={"others"}
                placeholder={"Other Allowance"}
                value={formData.others}
                onChange={handleChange}
              />
              <Input
                name={"gross"}
                placeholder={"Gross Pay"}
                value={formData.gross}
                onChange={handleChange}
              />
              <Input
                name={"relief"}
                placeholder={"Relief"}
                value={formData.relief}
                onChange={handleChange}
              />

              <Input
                name={"taxIncome"}
                placeholder={"TaxIncome"}
                value={formData.taxIncome}
                onChange={handleChange}
              />

              <Input
                name={"NSITF"}
                placeholder={"NSITF"}
                value={formData.NSITF}
                onChange={handleChange}
              />

              <Input
                name={"ITF"}
                placeholder={"ITF"}
                value={formData.ITF}
                onChange={handleChange}
              />
              
              <Input
                name={"pension"}
                placeholder={"Pension"}
                value={formData.pension}
                onChange={handleChange}
              />

<Input
                name={"paye"}
                placeholder={"Paye"}
                value={formData.paye}
                onChange={handleChange}
              />
                 <Input
                name={"debt"}
                placeholder={"Debt"}
                value={formData.department}
                onChange={handleChange}
              />
                 <Input
                name={"totalDed"}
                placeholder={"Total Deduction"}
                value={formData.totalDed}
                onChange={handleChange}
              />
                 <Input
                name={"specialBonus"}
                placeholder={"Sepcial Bonus"}
                value={formData.specialBonus}
                onChange={handleChange}
              />

<Input
                name={"netPay"}
                placeholder={"Net Payment"}
                value={formData.netPay}
                onChange={handleChange}
              />
             
                </div>

            <div className="flex justify-center">
              <button
                type="submit"
                // onClick={nextStep}
                className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
              >
               Save Matrix
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
              Matrix Saved
            </div>
            <div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={redoStep}
                  className=" bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                >
                  Input or modify another Matrix
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
        pageTitle={"Salary Matrix Form"}
        pageContent={SalaryMatrixFormTemplate}
      />
    </div>
  );
};

export default SuspensionsForm;
