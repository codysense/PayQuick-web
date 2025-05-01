import { Link } from "react-router-dom";
// import { activateEmployee, getEmployee } from "../utils/Employee";
import { useState } from "react";
// import Input from "../common/Input";



export default function EmployeeTable({
  employees,
  tableHeadings,
  menu,
  title,
  description,
  onActivation,
  actionState,
  editPage=false,
  onDelete=false,
}) {
  const [searchText, setsearchText] = useState("");

  // const handleActivation = (StaffID) => {
  //   const activated = activateEmployee(StaffID);
  //   if (activated) {
  //     setActionState("Activated");
  //   }
  // };

  const handleChange = (e) => {
    const { value } = e.target;
    setsearchText(value);
    // setsearchText((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  const filteredEmployee = employees.filter(
    (employee) => employee.first_name.toLowerCase() === searchText.toLowerCase()
  );

  const displayedEMployee = filteredEmployee.length === 0 ?  employees:filteredEmployee;
  console.log(displayedEMployee)

  const handleAlert = (status) => {
    if (status === "Active") {
      return "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium ring-1 ring-inset text-green-700 ring-green-600/20";
    }

    return "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium ring-1 ring-inset text-red-700 ring-red-600/20";
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-white">{title}</h1>
          <p className="mt-2 text-xl  text-white">{description}</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link to={menu[0].href}>{menu[0].name}</Link>
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div>
              <input
                name={"searchbox"}
                placeholder={"Search with FirstName"}
                onChange={handleChange}
                value={searchText}
                className={"mt-4 border w-full border-gray-300 rounded p-2"}
              />
            </div>
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    {tableHeadings[0]}
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    {tableHeadings[1]}
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    {tableHeadings[2]}
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    {tableHeadings[3]}
                  </th>

                  {/* <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  */}
                {editPage && <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>}
                  
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {displayedEMployee.map((person) => (
                  <tr key={person.StaffID}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="size-12 shrink-0">
                          <img
                            alt=""
                            src={person.profile_picture.src}
                            className="size-14 rounded-full ml-3"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {`${person.first_name} ${person.last_name}`}
                          </div>
                          <div className="mt-1 text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{person.cader}</div>
                      <div className="mt-1 text-gray-500">
                        {person.department}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className={handleAlert(person.status)}>
                        {person.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.hire_Date}
                    </td>
                    {editPage && <td className="relative whitespace-nowrap py-5 mx-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <span
                        onClick={() => onDelete(person)}
                        className="text-red-600 hover:text-red-800 hover:cursor-pointer px-4 "
                      >
                        Delete
                      </span>
                    </td>}
                    <td className="relative whitespace-nowrap py-5 mx-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <span
                        onClick={() => onActivation(person.StaffID)}
                        className="text-indigo-600 hover:text-indigo-900 hover:cursor-pointer px-4"
                      >
                        {actionState}
                      </span>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
