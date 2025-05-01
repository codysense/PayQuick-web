import React, { useContext } from "react";
import { motion } from "framer-motion";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Progress from "../Progress";
import stepContext from "../stepContext";

const NextofKinInformation = ({
  formData,
  onInputChange,
}) => {
  const relationship = [
    "Wife",
    "Husband",
    "Son",
    "Daughter",
    "Father",
    "Mother",
    "Sister",
    "Uncle",
    "Others",
  ];

  const gender = ["Male", "Female"];
  const country = ["Nigeria", "Ghana", "South Africa", "Zimbabwe"];

  const steps = [
    { name: "Personal", num: 1, status: "complete" },
    { name: "NextOfkin", num: 2, status: "current" },
    { name: "Guarantor", num: 3, status: "upcoming" },
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
      {/* <div className="text-base font-light text-center  ">Step 2/5</div>
      <div className="mt-4 w-full h-2" style={{ backgroundColor: "#e0cfc8" }}>
        <div className="h-full bg-indigo-700 rounded-3xl w-2/5"></div>
      </div> */}
      <Progress steps={steps} />
      <div className="mt-12 text-3xl  text-center">Next Of Kin Information</div>
      <div>
        <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
          <Input
            type="text"
            placeholder="FullName"
            name="nok_fullname" // This should match your formData property
            // className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
            // style={{ backgroundColor: "#c981ff" }}
            value={formData.nok_fullname} // This correctly points to formData.name
            onChange={onInputChange}
          />

          <select
            id="nok_relationship"
            name="nok_relationship"
            onChange={onInputChange}
            className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
            value={formData.nok_relationship}
          >
            <option disabled value="">
              -- Select your Relationship --
            </option>
            {relationship.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            id="gender"
            name="nok_gender"
            onChange={onInputChange}
            className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
            value={formData.nok_gender}
          >
            <option disabled value="">
              -- Select Gender --
            </option>
            {gender.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <Input
            type="text"
            placeholder="Phone Number"
            name="nok_phoneNumber" // This should match your formData property
            value={formData.nok_phoneNumber} // This correctly points to formData.name
            className="mt-4 sm:col-span-2 border border-gray-300 rounded p-2"
            onChange={onInputChange}
          />

          <Input
            type="text"
            placeholder="Street Address"
            name="nok_street_address" // This should match your formData property
            value={formData.nok_street_address} // This correctly points to formData.street_address
            onChange={onInputChange}
          />

          <Input
            type="text"
            placeholder="City"
            name="nok_city" // This should match your formData property
            value={formData.nok_city} // This correctly points to formData.name
            onChange={onInputChange}
          />

          <Input
            type="text"
            placeholder="State"
            name="nok_state" // This should match your formData property
            value={formData.nok_state} // This correctly points to formData.name
            onChange={onInputChange}
          />

          <select
            id="nok_country"
            name="nok_country"
            onChange={onInputChange}
            className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
            value={formData.nok_country}
          >
            <option value="" disabled>
              -- Select your Country --
            </option>
            {country.map((item) => (
              <option key={item}>{item}</option>
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

    // <div>
    //   <div className="grid lg:col-span-1 lg:grid-cols-1  gap-x-8 pag-y-8  pb-12 sm:grid-cols-6 md:col-span-2">
    //         <div>
    //           <h2 className="text-base font-semibold leading-7 text-gray-900  mb-4 border-b border-gray-900/10">
    //             Next of Kin Information
    //           </h2>

    //           <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
    //             <div className="sm:col-span-full">
    //               <Input
    //                 name="fullname"
    //                 id="fullname"
    //                 type="text"
    //                 label="Full Name"
    //                 autoComplete="fullname"
    //               />
    //             </div>

    //             <div className="sm:col-span-3">
    //               <Select
    //                 id="relationship"
    //                 label="Relationship"
    //                 prompt="Select Relatioship"
    //                 data={nextofkinRelationship}
    //               />
    //             </div>

    //             <div className="sm:col-span-3">
    //               <Select
    //                 id="country"
    //                 label="Country"
    //                 prompt="Select Country"
    //                 data={country}
    //               />
    //             </div>

    //             <div className="col-span-full">
    //               <Input
    //                 id="street-adddres"
    //                 label="Street Address"
    //                 name="street-address"
    //                 autoComplete="street-address"
    //                 type="text"
    //               />
    //             </div>

    //             <div className="sm:col-span-2 sm:col-start-1">
    //               <Input
    //                 id="city"
    //                 name="city"
    //                 type="text"
    //                 autoComplete="address-level2"
    //                 label="City"
    //               />
    //             </div>

    //             <div className="sm:col-span-2">
    //               <Input
    //                 id="region"
    //                 name="region"
    //                 label="State / Province"
    //                 type="text"
    //                 autoComplete="address-level1"
    //               />
    //             </div>

    //             <div className="sm:col-span-2">
    //               <Input
    //                 id="phone"
    //                 name="phone"
    //                 label="Phone Number"
    //                 type="text"
    //                 autoComplete="phone"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    // </div>
  );
};

export default NextofKinInformation;
