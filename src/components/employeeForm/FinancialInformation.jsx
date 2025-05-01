import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import Input from "../../common/Input"
import Button from '../../common/Button';
import Progress from '../Progress';
import stepContext from '../stepContext';

const FinancialInformation = ({formData, onInputChange}) => {
  const department = ["Account", "Admin", "Production", "Sales"];
  const cader = [
    "Manager",
    "Assistant Manager",
    "Supervisor",
    "Trainee Office",
    "Shift Leader",
    "Attendant II",
    "Attendant I",
  ];


  const steps = [
    { name: 'Personal', num: 1, status: 'complete' },
    { name: 'NextOfkin', num: 2, status: 'complete' },
    { name: 'Guarantor', num: 3, status: 'complete' },
    { name: 'Financial', num: 4, status: 'current' },
    { name: 'Profile', num: 5, status: 'upcoming' },
  ]
  const{step,prevStep,nextStep}=useContext(stepContext)
  return (
    <motion.div
    key={step} // Add this line
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="md:w-3/5 mx-auto py-12"
  >
    {/* <div className="text-base font-light text-center  ">
      Step 4/5
    </div>
    <div
      className="mt-4 w-full h-2"
      style={{ backgroundColor: "#e0cfc8" }}
    >
      <div className="h-full bg-indigo-700 rounded-3xl w-4/5"></div>
    </div> */}
    <Progress steps={steps}/>
    <div className="mt-12 text-3xl  text-center">
      Financial Information
    </div>
    <div>
      <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
        <Input
          type="text"
          placeholder="Bank Name"
          name="financial_bank" // This should match your formData property
          className="mt-4 sm:col-span-2 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.financial_bank} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Account Name"
          name="financial_account_name" // This should match your formData property
          className="mt-4 sm:col-span-2 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.financial_account_name} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Account Number"
          name="financial_account_number" // This should match your formData property
          className="mt-4 sm:col-span-2 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.financial_account_number} // This correctly points to formData.name
          onChange={onInputChange}
        />
        <Input
          type="text"
          placeholder="PFA Manager"
          name="financial_PFA_manager" // This should match your formData property
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.financial_PFA_manager}
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="PFA ID"
          name="financial_PFA_id" // This should match your formData property
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.financial_PFA_id}
          onChange={onInputChange}
        />

        <select
          id="department"
          name="department"
          onChange={onInputChange}
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2 text-gray-500"
          value={formData.department}
        >
          <option disabled value="">-- Select Department --</option>
          {department.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          id="cader"
          name="cader"
          onChange={onInputChange}
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2 text-gray-500"
          value={formData.cader}
        >
          <option disabled value="">-- Select Cader --</option>
          {cader.map((item) => (
            <option key={item} >
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="flex justify-center mt-12">
    <Button
          type="button"
          onClick={prevStep}
          //className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
          caption={"Previous"}
        />
        <Button
          type="button"
          onClick={nextStep}
          //className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
          caption={"Next"}
        />
    </div>
  </motion.div>
  )
}

export default FinancialInformation