/*
This example requires some changes to your config:
  
```
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
```
*/ import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Input from "./common/Input";
import Select from "./common/Select";

import Button from "./common/Button";

const marital = ["Single", "Married", "Divorce"];
const gender = ["Male", "Female"];
const country = ["Nigeria", "Ghana", "South Africa", "Zimbabwe"];
const nextofkinRelationship = [
  "Wife",
  "Husband",
  "Son",
  "Daughter",
  "Brother",
  "Sister",
  "Father",
  "Mother",
];

export default function Form() {
  return (
    <form>
      <div className="space-y-12">
        <div className="grid lg:grid-cols-2 gap-x-10 pag-y-8 border-b border-gray-900/10 pb-12 sm:grid-cols-6 md:col-span-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900  mb-4 border-b border-gray-900/10">
              Personal Information
            </h2>

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-3">
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  label="First Name"
                />
              </div>

              <div className="sm:col-span-3">
                <Input
                  id="last-name"
                  label="Last Name"
                  type="text"
                  autoComplete="family-name"
                  name="last-name"
                />
                {/* <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div> */}
              </div>

              <div className="sm:col-span-2">
                <Select
                  id="marital-status"
                  label="Marital Status"
                  prompt="Select Marital Status"
                  data={marital}
                />
              </div>

              <div className="sm:col-span-2">
                <Select
                  id="gender"
                  label="Gender"
                  prompt="Select Gender"
                  data={gender}
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  name="dob"
                  id="dob"
                  type="date"
                  autoComplete="dob"
                  label="Date of Birth"
                />
              </div>

              <div className="sm:col-span-3">
                <Input
                  name="email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  label="Email Address"
                />
              </div>

              <div className="sm:col-span-3">
                <Select
                  id="country"
                  label="Country"
                  prompt="Select Country"
                  data={country}
                />
              </div>

              <div className="col-span-full">
                <Input
                  id="street-adddres"
                  label="Street Address"
                  name="street-address"
                  autoComplete="street-address"
                  type="text"
                />
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  label="City"
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  id="region"
                  name="region"
                  label="State / Province"
                  type="text"
                  autoComplete="address-level1"
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  id="postal-code"
                  name="postal-code"
                  label="ZIP / Postal code"
                  type="text"
                />
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Input
                  name="primary-number"
                  id="primary-number"
                  type="text"
                  label="Primary Phone Number"
                  autoComplete="phone"
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  name="secondary-number"
                  id="secondary-number"
                  type="text"
                  label="Secondary Phone Number"
                  autoComplete="mobile"
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  name="whatsapp"
                  id="whatsapp"
                  type="text"
                  label="Whatsapp Number"
                  autoComplete="whatsapp"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:col-span-1 lg:grid-cols-1  gap-x-8 pag-y-8  pb-12 sm:grid-cols-6 md:col-span-2">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900  mb-4 border-b border-gray-900/10">
                Next of Kin Information
              </h2>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-full">
                  <Input
                    name="fullname"
                    id="fullname"
                    type="text"
                    label="Full Name"
                    autoComplete="fullname"
                  />
                </div>

                <div className="sm:col-span-3">
                  <Select
                    id="relationship"
                    label="Relationship"
                    prompt="Select Relatioship"
                    data={nextofkinRelationship}
                  />
                </div>

                <div className="sm:col-span-3">
                  <Select
                    id="country"
                    label="Country"
                    prompt="Select Country"
                    data={country}
                  />
                </div>

                <div className="col-span-full">
                  <Input
                    id="street-adddres"
                    label="Street Address"
                    name="street-address"
                    autoComplete="street-address"
                    type="text"
                  />
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    label="City"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    id="region"
                    name="region"
                    label="State / Province"
                    type="text"
                    autoComplete="address-level1"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    type="text"
                    autoComplete="phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"> */}
        <div className="grid lg:grid-cols-2 gap-x-10 pag-y-8 border-b border-gray-900/10 pb-12 sm:grid-cols-6 md:col-span-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900  mb-4 border-b border-gray-900/10">
              Guanrantor Information
            </h2>
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-full">
                <Input
                  name="fullname"
                  id="fullname"
                  type="text"
                  label="Full Name"
                  autoComplete="fullname"
                />
              </div>

              <div className="sm:col-span-3">
                <Input
                  name="relationship"
                  id="relatioship"
                  type="text"
                  label="Relationship"
                  autoComplete="realtionship"
                />
              </div>

              <div className="sm:col-span-3">
                <Select
                  id="country"
                  label="Country"
                  prompt="Select Country"
                  data={country}
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Input
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  type="text"
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  id="state"
                  label="State / Province"
                  name="state"
                  autoComplete="state"
                  type="text"
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  label="Phone Number"
                  autoComplete="phone-number"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:col-span-1 lg:grid-cols-1  gap-x-8 pag-y-8  pb-12 sm:grid-cols-6 md:col-span-2">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900  mb-4 border-b border-gray-900/10">
                Financial Information
              </h2>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-3">
                  <Input
                    id="bank-name"
                    name="bank-name"
                    type="text"
                    autoComplete="bank-name"
                    label="Bank Name"
                  />
                </div>

                <div className="sm:col-span-3">
                  <Input
                    id="account-number"
                    label="Account Number"
                    name="account-number"
                    autoComplete="account-number"
                    type="text"
                  />
                </div>

                <div className="sm:col-span-3">
                  <Input
                    id="account-name"
                    label="Account Name"
                    name="account-name"
                    autoComplete="account-name"
                    type="text"
                  />
                </div>

                <div className="sm:col-span-3" hidden>
                  <Input
                    id="account-name"
                    label="Account Name"
                    name="account-name"
                    autoComplete="account-name"
                    type="text"
                  />
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                  <Input
                    id="PFA-manager"
                    label="PFA Manager"
                    name="PFa-manager"
                    autoComplete="PFA-manager"
                    type="text"
                  />
                </div>

                <div className="sm:col-span-3">
                  {/* <label
                    htmlFor="PFA-id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    PFA ID
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="PFA-id"
                      id="PFA-id"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div> */}
                  <Input
                    id="PFA-id"
                    label="PFA ID"
                    name="PFA-id"
                    autoComplete="PFA-id"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide username and password for employee to login to his
              account.
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
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
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-3">
                <Input
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    type="text"
                  />
              </div>

              <div className="sm:col-span-3">
                <Input id="password" name="password" type="password" label="Password"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button caption="Cancel" type="button" />
        <Button caption="Save" type="submit"/>
        
      </div>
    </form>
  );
}
