import React, { useContext } from "react";
import Input from "../../common/Input";
import { motion } from "framer-motion";
import Button from "../../common/Button";
import Progress from "../Progress";
import stepContext from "../stepContext";

const marital = ["Single", "Married", "Divorced"];
const gender = ["Male", "Female"];
const country = ["Nigeria", "Ghana", "South Africa", "Zimbabwe"];
const religion = ["Islam", "Christainity", "Others"];

const PersonalInformation = ({ formData, onInputChange }) => {
  const steps = [
    { name: "Personal", num: 1, status: "current" },
    { name: "NextOfkin", num: 2, status: "upcoming" },
    { name: "Guarantor", num: 3, status: "upcoming" },
    { name: "Financial", num: 4, status: "upcoming" },
    { name: "Profile", num: 5, status: "upcoming" },
  ];

  const { step, nextStep } = useContext(stepContext);
  return (
    <motion.div
      key={step} // Add this line
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:w-3/5 mx-auto py-12"
    >
      {/* <div className="text-base font-light text-center ">
                  Step 1/5
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#e0cfc8" }}
                >
                  <div className="h-full bg-indigo-700 rounded-3xl w-1/5"></div>
                </div> */}
      <Progress steps={steps} />
      <div className="mt-12 text-3xl  text-center">Personal Information</div>

      <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
        {/* Name input field */}
        <Input
          type="text"
          placeholder="First-Name"
          name="first_name" // This should match your formData property
          // className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          // style={{ backgroundColor: "#c981ff" }}
          value={formData.first_name} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Last-Name"
          name="last_name" // This should match your formData property
          value={formData.last_name}
          onChange={onInputChange}
        />

        <select
          id="marital"
          name="marital"
          onChange={onInputChange}
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          value={formData.marital}
        >
          <option value="" disabled>
            -- Select Marital Status --
          </option>
          {marital.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          id="gender"
          name="gender"
          onChange={onInputChange}
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          value={formData.gender}
        >
          <option value="" disabled>
            -- Select Gender --
          </option>
          {gender.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <Input
          type="text"
          placeholder="Street Address"
          name="street_address" // This should match your formData property
          value={formData.street_address} // This correctly points to formData.street_address
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="City"
          name="city" // This should match your formData property
          value={formData.city} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="State"
          name="state" // This should match your formData property
          value={formData.state} // This correctly points to formData.name
          onChange={onInputChange}
        />

        <select
          id="country"
          name="country"
          onChange={onInputChange}
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          value={formData.country}
        >
          <option value="" disabled>
            -- Select your Country --
          </option>
          {country.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <Input
          type="email"
          placeholder="Email"
          name="email" // This should match your formData property
          value={formData.email}
          onChange={onInputChange}
        />

        <Input
          type="date"
          placeholder="Date of Birth"
          name="dob" // This should match your formData property
          value={formData.dob}
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Phone Number"
          name="primary_number" // This should match your formData property
          value={formData.primary_number} // This correctly points to formData.name
          className="mt-4 sm:col-span-2 border border-gray-300 rounded p-2"
          onChange={onInputChange}
        />

        <Input
          type="text"
          placeholder="Whatsapp Number"
          name="whatsapp_number" // This should match your formData property
          value={formData.whatsapp_number} // This correctly points to formData.name
          className="mt-4 sm:col-span-2 border border-gray-300 rounded p-2"
          onChange={onInputChange}
        />

        <select
          id="religion"
          name="religion"
          onChange={onInputChange}
          className="mt-4 sm:col-span-3 border border-gray-300 rounded p-2"
          value={formData.religion}
        >
          <option value="" disabled>
            -- Select Religion --
          </option>
          {religion.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <Button
          type="button"
          onClick={nextStep}
          //className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
          caption={"Next"}
        />
        {/* Next
                  </Button> */}
      </div>
    </motion.div>

    // <div>
    //   <h2 className="text-base font-semibold leading-7 text-gray-900  mb-4 border-b border-gray-900/10">
    //     Personal Information
    //   </h2>

    //   <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
    //     <div className="sm:col-span-3">
    //       <Input
    //         id="first-name"
    //         name="first-name"
    //         type="text"
    //         autoComplete="given-name"
    //         label="First Name"
    //       />
    //     </div>

    //     <div className="sm:col-span-3">
    //       <Input
    //         id="last-name"
    //         label="Last Name"
    //         type="text"
    //         autoComplete="family-name"
    //         name="last-name"
    //       />
    //       {/* <label
    //               htmlFor="last-name"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Last name
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 type="text"
    //                 name="last-name"
    //                 id="last-name"
    //                 autoComplete="family-name"
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div> */}
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Select
    //         id="marital-status"
    //         label="Marital Status"
    //         prompt="Select Marital Status"
    //         data={marital}
    //       />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Select
    //         id="gender"
    //         label="Gender"
    //         prompt="Select Gender"
    //         data={gender}
    //       />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Input
    //         name="dob"
    //         id="dob"
    //         type="date"
    //         autoComplete="dob"
    //         label="Date of Birth"
    //       />
    //     </div>

    //     <div className="sm:col-span-3">
    //       <Input
    //         name="email"
    //         id="email"
    //         type="email"
    //         autoComplete="email"
    //         label="Email Address"
    //       />
    //     </div>

    //     <div className="sm:col-span-3">
    //       <Select
    //         id="country"
    //         label="Country"
    //         prompt="Select Country"
    //         data={country}
    //       />
    //     </div>

    //     <div className="col-span-full">
    //       <Input
    //         id="street-adddres"
    //         label="Street Address"
    //         name="street-address"
    //         autoComplete="street-address"
    //         type="text"
    //       />
    //     </div>

    //     <div className="sm:col-span-2 sm:col-start-1">
    //       <Input
    //         id="city"
    //         name="city"
    //         type="text"
    //         autoComplete="address-level2"
    //         label="City"
    //       />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Input
    //         id="region"
    //         name="region"
    //         label="State / Province"
    //         type="text"
    //         autoComplete="address-level1"
    //       />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Input
    //         id="postal-code"
    //         name="postal-code"
    //         label="ZIP / Postal code"
    //         type="text"
    //       />
    //     </div>

    //     <div className="sm:col-span-2 sm:col-start-1">
    //       <Input
    //         name="primary-number"
    //         id="primary-number"
    //         type="text"
    //         label="Primary Phone Number"
    //         autoComplete="phone"
    //       />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Input
    //         name="secondary-number"
    //         id="secondary-number"
    //         type="text"
    //         label="Secondary Phone Number"
    //         autoComplete="mobile"
    //       />
    //     </div>

    //     <div className="sm:col-span-2">
    //       <Input
    //         name="whatsapp"
    //         id="whatsapp"
    //         type="text"
    //         label="Whatsapp Number"
    //         autoComplete="whatsapp"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default PersonalInformation;
