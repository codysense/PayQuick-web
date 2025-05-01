import React, { useContext } from "react";
import { motion } from "framer-motion";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Progress from "../Progress";
import stepContext from "../stepContext";

const ProfileInformation = ({ formData, onInputChange, onFileUpload }) => {
  const steps = [
    { name: "Personal", num: 1, status: "complete" },
    { name: "NextOfkin", num: 2, status: "complete" },
    { name: "Guarantor", num: 3, status: "complete" },
    { name: "Financial", num: 4, status: "complete" },
    { name: "Profile", num: 5, status: "current" },
  ];

  const { step, prevStep } = useContext(stepContext);
  return (
    <motion.div
      key={step} // Add this line
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:w-3/5 mx-auto py-12"
    >
      {/* <div className="text-base font-light text-center  ">Step 5/5</div>
      <div className="mt-4 w-full h-2" style={{ backgroundColor: "#e0cfc8" }}>
        <div className="h-full bg-indigo-700 rounded-3xl w-5/5"></div>
      </div> */}

      <Progress steps={steps} />
      <div className="mt-12 text-3xl  text-center">Profile Information</div>
      <div>
        <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
          <div className="max-w-2xl space-y-6 md:col-span-full">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {/* <PhotoIcon
                              className="mx-auto h-12 w-12 text-gray-300"
                              aria-hidden="true"
                            /> */}
                  <div className="flex justify-center items-center">
                    <img
                      src={formData.profile_photo}
                      alt="Profile"
                      className="size-28 rounded-full"
                    />
                  </div>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="profile_photo"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="profile_photo"
                        name="profile_photo"
                        type="file"
                        className="sr-only"
                        onChange={onFileUpload}
                        //value={formData.profile_photo}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2"></div> */}
            <div className="grid max-w-2xl grid-cols-1 gap-x-1 sm:grid-cols-6 md:col-span-2">
              <Input
                id="username"
                placeholder="username"
                name="username"
                onChange={onInputChange}
                value={formData.username}
                type="text"
              />

              <Input
                id="password"
                placeholder="password"
                name="password"
                onChange={onInputChange}
                value={formData.password}
                type="password"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button
          type="button"
          onClick={prevStep}
          //className="mt-4 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-800"
          caption={"Previous"}
        />
        <Button type="submit" caption={"Submit"} />
      </div>
    </motion.div>
  );
};

export default ProfileInformation;
