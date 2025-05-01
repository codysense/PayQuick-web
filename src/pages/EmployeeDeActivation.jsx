import React, {  useState } from "react";
import { getEmployeeMenus } from "../components/Menus";
import { getEmployees} from "../utils/Employee";
import EmployeeTable from "../components/EmpoyeeTable";
import PageTemplates from "../common/PageTemplates";
import { toast } from "react-toastify";

const employeeMenu = getEmployeeMenus().filter(
  (menu) => menu.name === "New Employee"
);

const employees = getEmployees().filter(
  (employee) => employee.status === "Active"
);
const pageTitle = "Deactivate Employee";
const description = "List of Active Employees";

const tableHeadings = ["Name", "Title", "EmploymentStatus", "HireDate"];
const action = "Deactivate";



const EmployeeDeActivation = () => {
  const [ActiveEmployee, setActiveEmployee] = useState(employees);


  

  const handleDeactivation = (StaffID) => {
    // const activated = activateEmployee(StaffID);

    const employee = ActiveEmployee.find((employee)=> employee.StaffID === StaffID)
  if (!employee) return null
 const updatedData = { ...employee, status:"Inactive" }
//  console.log(updatedData)
const Activated = ActiveEmployee.map((staff) =>
  staff.StaffID === updatedData.StaffID
    ? { ...ActiveEmployee, ...updatedData}
    : staff
);
  

    setActiveEmployee(
      Activated.filter((activeEmployee) => activeEmployee.status !== "Inactive")
    );
    toast.success(`${employee.first_name} ${employee.last_name} is deactivated`)

     console.log(ActiveEmployee);
  };

  const pageContent = (
    <div>
      <EmployeeTable
        employees={ActiveEmployee}
        tableHeadings={tableHeadings}
        menu={employeeMenu}
        description={description}
        onActivation={handleDeactivation}
        actionState={action}
      />
    </div>
  );

  return (
    <div>
      <PageTemplates pageTitle={pageTitle} pageContent={pageContent} />
    </div>
  );
};

export default EmployeeDeActivation;
