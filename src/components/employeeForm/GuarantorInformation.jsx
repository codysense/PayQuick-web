import React, { useContext } from "react";
import { motion } from "framer-motion";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Progress from "../Progress";
import stepContext from "../stepContext";

const GuarantorInformation = ({
  formData,
  onInputChange,
}) => {
  const country = ["Nigeria", "Ghana", "South Africa", "Zimbabwe"];

  const steps = [
    { name: "Personal", num: 1, status: "complete" },
    { name: "NextOfkin", num: 2, status: "complete" },
    { name: "Guarantor", num: 3, status: "current" },
    { name: "Financial", num: 4, status: "upcoming" },
    { name: "Profile", num: 5, status: "upcoming" },
  ];
  const { step, prevStep, nextStep } = useContext(stepContext);
  return (
    <motion.div
      key={step} // Add this line
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:w-3/5 mx-auto py-12"
    >
      {/* <div className="text-base font-light text-center  ">Step 3/5</div>
      <div className="mt-4 w-full h-2" style={{ backgroundColor: "#e0cfc8" }}>
        <div className="h-full bg-indigo-700 rounded-3xl w-3/5"></div>
      </div> */}

      <Progress steps={steps} />

      <div className="mt-12 text-3xl  text-center">Guarantor Information</div>
      <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
        <Input
          type="text"
          placeholder="FullName"
          name="guarantor_fullname" // This should match your formData property
          // className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.guarantor_fullname} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Occupation"
          name="guarantor_occupation" // This should match your formData property
          // className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.guarantor_occupation} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Business Address"
          name="guarantor_business_address" // This should match your formData property
          // className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.guarantor_business_address} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Phone Number"
          name="guarantor_phoneNumber" // This should match your formData property
          value={formData.guarantor_phoneNumber} // This correctly points to formData.name
          className="mt-4 sm:col-span-2 border border-gray-300 rounded p-2"
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Home Street Address"
          name="guarantor_street_address" // This should match your formData property
          value={formData.guarantor_street_address} // This correctly points to formData.street_address
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="City"
          name="guarantor_city" // This should match your formData property
          value={formData.guarantor_city} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="State"
          name="guarantor_state" // This should match your formData property
          value={formData.guarantor_state} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <select
          id="guarantor_country"
          name="guarantor_country"
          onChange={onInputChange}
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          value={formData.guarantor_country}
        >
          <option disabled value="">
            -- Select Country --
          </option>
          {country.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
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
  );
};

export default GuarantorInformation;
