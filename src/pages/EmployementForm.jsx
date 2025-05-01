import React, { useState, useContext } from "react";

import avatar from "../images/men_avatar.png";
import PersonalInformation from "../components/employeeForm/PersonalInformation";
import NextofKinInformation from "../components/employeeForm/NextofKinInformation";
import GuarantorInformation from "../components/employeeForm/GuarantorInformation";
import FinancialInformation from "../components/employeeForm/FinancialInformation";
import ProfileInformation from "../components/employeeForm/ProfileInformation";
import SubmitionModal from "../components/employeeForm/submittionModal";
import {
  saveEmployee,
  getEmployee,
  generateStaffID,
  getDeptCode,
} from "../utils/Employee";
import PageTemplates from "../common/PageTemplates";
import { useLocation } from "react-router-dom";
import stepContext from "../components/stepContext";

function EmployementForm() {
  const location = useLocation();
  const { StaffID } = location.state || {};

  const employee = getEmployee(!StaffID ? "000" : StaffID);
  const formDefaultValues = {
    //personal information
    first_name: "",
    last_name: "",
    marital: "",
    gender: "",
    street_address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    dob: "",
    primary_number: "",
    secondary_number: "",
    whatsapp_number: "",
    StaffID: "",
    religion: "",

    //Next of kin (nok) information
    nok_fullname: "",
    nok_relationship: "",
    nok_phoneNumber: "",
    nok_gender: "",
    nok_street_address: "",
    nok_city: "",
    nok_state: "",
    nok_country: "",

    //Guarantor Information
    guarantor_fullname: "",
    guarantor_phoneNumber: "",
    guarantor_business_address:"",
    guarantor_street_address: "",
    guarantor_city: "",
    guarantor_state: "",
    guarantor_country: "",
    guarantor_occupation:"",

    //Financial Information
    financial_bank: "",
    financial_account_number: "",
    financial_account_name: "",
    financial_PFA_id: "",
    financial_PFA_manager: "",
    department: "",
    cader: "",

    //Profile Information
    username: "",
    password: "",
    profile_photo: avatar,
  };

  const { step, nextStep } = useContext(stepContext);
  //const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    //personal information
    first_name: employee.first_name,
    last_name: employee.last_name,
    marital: employee.marital,
    gender: employee.gender,
    street_address: employee.street_address,
    city: employee.city,
    state: employee.state,
    country: employee.country,
    email: employee.email,
    dob: employee.dob,
    primary_number: employee.primary_number,
    whatsapp_number: employee.whatsapp_number,
    StaffID: employee.StaffID,
    religion: employee.religion,

    //Next of kin (nok) information
    nok_fullname: employee.nok_fullname,
    nok_relationship: employee.nok_relationship,
    nok_phoneNumber: employee.nok_phoneNumber,
    nok_gender: employee.nok_gender,
    nok_street_address: employee.nok_street_address,
    nok_city: employee.nok_city,
    nok_state: employee.nok_state,
    nok_country: employee.nok_country,

    //Guarantor Information
    guarantor_fullname: employee.guarantor_fullname,
    guarantor_phoneNumber: employee.guarantor_phoneNumber,
    guarantor_business_address: employee.guarantor_business_address,
    guarantor_street_address: employee.guarantor_street_address,
    guarantor_city: employee.guarantor_city,
    guarantor_state: employee.guarantor_state,
    guarantor_country: employee.guarantor_country,
    guarantor_occupation: employee.guarantor_occupation,

    //Financial Information
    financial_bank: employee.financial_bank,
    financial_account_number: employee.financial_account_number,
    financial_account_name: employee.financial_account_name,
    financial_PFA_id: employee.financial_PFA_id,
    financial_PFA_manager: employee.financial_PFA_manager,
    department: employee.department,
    cader: employee.cader,

    //Profile Information
    username: employee.username,
    password: employee.password,
    profile_photo: employee.profile_picture.src,
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    try {
      const { name } = e.target;
      const photo = document.getElementById("profile_photo");
      setFormData((prevState) => ({
        ...prevState,

        [name]: URL.createObjectURL(photo.files[0]),
      }));
    } catch (error) {
      console.error(error);
    }
  };

  // const nextStep = () => {
  //   setStep(step + 1);
  // };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  // const redoStep = () => {
  //   setStep(1);
  // };

  // const gotoStep = (step) => {
  //   setStep(step);
  // };
  const generateStaffid = () => {
    if (employee.StaffID === "000") {
      const staffid = generateStaffID(getDeptCode(formData.department));
      formData.StaffID = staffid;
      setFormData(formData);
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    generateStaffid();
    nextStep();
   const newEmployess = saveEmployee(formData);
    console.log(newEmployess.filter(employee=>employee.StaffID !== "000"));
    setFormData(formDefaultValues);
  };

  

  const employeeForm = (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-12 md:w-4/5 mx-auto rounded-3xl mb-6"
        style={{ backgroundColor: "#ebe9d8", opacity: 0.9 }}
      >
        {step === 1 && (
          <PersonalInformation
            formData={formData}
            onInputChange={handleChange}
          />
        )}
        {step === 2 && (
          <NextofKinInformation
            formData={formData}
            // onPrevStep={prevStep}
            // onNextStep={nextStep}
            onInputChange={handleChange}
          />
        )}
        {step === 3 && (
          <GuarantorInformation
            formData={formData}
            onInputChange={handleChange}
          />
        )}
        {step === 4 && (
          <FinancialInformation
            formData={formData}
            onInputChange={handleChange}
          />
        )}

        {step === 5 && (
          <ProfileInformation
            formData={formData}
            onInputChange={handleChange}
            onFileUpload={handleFileUpload}
          />
        )}

        {step === 6 && <SubmitionModal />}
      </form>
    </div>
  );

  return (
    <div>
      <PageTemplates
        pageTitle={"Employee Registration From"}
        pageContent={employeeForm}
      />
    </div>
  );
}

export default EmployementForm;
