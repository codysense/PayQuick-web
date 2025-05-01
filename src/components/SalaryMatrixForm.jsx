import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTemplates from "../common/PageTemplates";
import {
  calculateGross,
  getDesignation,
  getEmployees,
  getSalaryMatrices,
} from "../utils/Employee";
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

    // Update state variable
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
      return updatedData;
    });
  };

  const formatInput = (input, description) => {
    if (formData[input] === "") return "";
    const formattedValue = `${description}: ${new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: "NGN",
      }
    ).format(formData[input])}`;

    return formattedValue;
  };

  const [step, setStep] = useState(1);

  const handSelectionChange = (e) => {
    const { value } = e.target;
    handleChange(e);
    const selectedCader =
      getSalaryMatrices().find(
        (c) => c.cader === value
      );

    const getGross = calculateGross(value);

    if (!selectedCader) {
      return setFormData((prevData) => {
        return {
          ...prevData,
          gross: "",
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
        };
      });
    }

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        gross: getGross,
        basic: selectedCader.basic,
        trans: selectedCader.trans,
        house: selectedCader.house,
        clothing: selectedCader.clothing,
        meal: selectedCader.meal,
        entertainment:
          selectedCader.entertainment,
        medical: selectedCader.medical,
        ce: selectedCader.ce,
        leave: selectedCader.leave,
        others: selectedCader.others,
        relief: selectedCader.relief,
        taxIncome: selectedCader.taxIncome,
        NSITF: selectedCader.NSITF,
        ITF: selectedCader.ITF,
        pension: selectedCader.pension,
        paye: selectedCader.paye,
        debt: selectedCader.debt,
        totalDed: selectedCader.totalDed,
        netPay: selectedCader.netPay,
        specialBonus: selectedCader.specialBonus,
      };
      return updatedData;
    });
  };

  // const nextStep = () => {
  //   setStep(step + 1);
  // };
  // const employees = getEmployees().filter((m) => m.StaffID !== "000");

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
    const employees = getEmployees().filter(
      (m) => m.cader === "Manager"
    );
    employees.map(
      (m) =>
        m.department === "Finance" ||
        m.department === "Admin"
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
        className="mt-12 sm:w-4/5 mx-auto rounded-3xl mb-6"
        style={{
          backgroundColor: "#ebe9d8",
          opacity: 0.9,
        }}
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
                onChange={handSelectionChange}
                className="mt-4 border border-gray-300 rounded p-2 col-span-3"
              >
                <option value="" disabled>
                  -- Select Cader --
                </option>
                {cader.map((c, index) => (
                  <option key={index}>
                    {c.name}
                  </option>
                ))}
              </select>
              <Input
                name={"basic"}
                placeholder={"Basic"}
                non_editable={true}
                value={formatInput(
                  "basic",
                  "Basic"
                )}
                onChange={handleChange}
              />
              <Input
                name={"trans"}
                placeholder={
                  "Transportation Allowance"
                }
                non_editable={true}
                value={formatInput(
                  "trans",
                  "Trans"
                )}
                onChange={handleChange}
              />
              <Input
                name={"house"}
                placeholder={"House Allowance"}
                non_editable={true}
                value={formatInput(
                  "house",
                  "House"
                )}
                onChange={handleChange}
              />
              <Input
                name={"clothing"}
                placeholder={"Clothing Allowance"}
                non_editable={true}
                value={formatInput(
                  "clothing",
                  "Clothing"
                )}
                onChange={handleChange}
              />
              <Input
                name={"meal"}
                placeholder={"Meal Allowance"}
                non_editable={true}
                value={formatInput(
                  "meal",
                  "Meal"
                )}
                onChange={handleChange}
              />

              <Input
                name={"entertainment"}
                placeholder={
                  "Entertainment Allowance"
                }
                non_editable={true}
                value={formatInput(
                  "entertainment",
                  "Ent"
                )}
                onChange={handleChange}
              />

              <Input
                name={"medical"}
                placeholder={"Medical Allowance"}
                non_editable={true}
                value={formatInput(
                  "medical",
                  "Medical"
                )}
                onChange={handleChange}
              />

              <Input
                name={"ce"}
                placeholder={"CE"}
                non_editable={true}
                value={formatInput("ce", "CE")}
                onChange={handleChange}
              />
              <Input
                name={"leave"}
                placeholder={"Leave Allowance"}
                non_editable={true}
                value={formatInput(
                  "leave",
                  "Leave"
                )}
                onChange={handleChange}
              />
              <Input
                name={"others"}
                placeholder={"Other Allowance"}
                non_editable={true}
                value={formatInput(
                  "others",
                  "Others"
                )}
                onChange={handleChange}
              />
              <Input
                name={"gross"}
                placeholder={"Gross Pay"}
                non_editable={true}
                value={formatInput(
                  "gross",
                  "Gross"
                )}
                onChange={handleChange}
              />
              <Input
                name={"relief"}
                placeholder={"Relief"}
                non_editable={true}
                value={formatInput(
                  "relief",
                  "Relief"
                )}
                onChange={handleChange}
              />

              <Input
                name={"taxIncome"}
                placeholder={"TaxIncome"}
                non_editable={true}
                value={formatInput(
                  "taxIncome",
                  "TaxIncome"
                )}
                onChange={handleChange}
              />

              <Input
                name={"NSITF"}
                placeholder={"NSITF"}
                non_editable={true}
                value={formatInput(
                  "NSITF",
                  "NSITF"
                )}
                onChange={handleChange}
              />

              <Input
                name={"ITF"}
                placeholder={"ITF"}
                non_editable={true}
                value={formatInput("ITF", "ITF")}
                onChange={handleChange}
              />

              <Input
                name={"pension"}
                placeholder={"Pension"}
                non_editable={true}
                value={formatInput(
                  "pension",
                  "Pension"
                )}
                onChange={handleChange}
              />

              <Input
                name={"paye"}
                placeholder={"PAYE"}
                non_editable={true}
                value={formatInput(
                  "paye",
                  "PAYE"
                )}
                onChange={handleChange}
              />
              <Input
                name={"debt"}
                placeholder={"Debt"}
                non_editable={true}
                value={formatInput(
                  "debt",
                  "Debt"
                )}
                onChange={handleChange}
              />
              <Input
                name={"totalDed"}
                placeholder={"Total Deduction"}
                non_editable={true}
                value={formatInput(
                  "totalDed",
                  "Total Ded"
                )}
                onChange={handleChange}
              />
              <Input
                name={"specialBonus"}
                placeholder={"Special Bonus"}
                non_editable={true}
                value={formatInput(
                  "specialBonus",
                  "S.Bonus"
                )}
                onChange={handleChange}
              />

              <Input
                name={"netPay"}
                placeholder={"Net Payment"}
                non_editable={true}
                value={formatInput(
                  "netPay",
                  "Net Pay"
                )}
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

export default SalaryMatrixForm;
