import React, { useState } from "react";
import { getEmployeeMenus } from "../components/Menus";
import { getEmployees } from "../utils/Employee";
import EmployeeTable from "../components/EmpoyeeTable";
import PageTemplates from "../common/PageTemplates";
import { toast } from "react-toastify";

const employeeMenu = getEmployeeMenus().filter(
  (menu) => menu.name === "New Employee"
);

const employees = getEmployees().filter(
  (employee) => employee.status === "Inactive"
);
const pageTitle = "Activate Employee";
const description = "List of inactive Employees";

const tableHeadings = ["Name", "Title", "EmploymentStatus", "HireDate"];
const action = "Activate";

// function activateEmployee(employeeID){
//   const employee = employees.find((employee)=> employee.StaffID === employeeID)
//   if (!employee) return null
//  const updatedData = { ...employee, Status:"Active" }
//  return inActiveEmployee.map((employee) =>
//   employee.StaffID === updatedData.StaffID
//     ? { ...employee, updatedData}
//     : employee
// );

// }

const EmployeeActivation = () => {
  const [inActiveEmployee, setInActiveEmployee] = useState(employees);

  const handleActivation = (StaffID) => {
    // const activated = activateEmployee(StaffID);

    const employee = inActiveEmployee.find(
      (employee) => employee.StaffID === StaffID
    );
    if (!employee) return null;
    const updatedData = { ...employee, status: "Active" };

    const inActivated = inActiveEmployee.map((staff) =>
      staff.StaffID === updatedData.StaffID
        ? { ...inActiveEmployee, ...updatedData }
        : staff
    );

    setInActiveEmployee(
      inActivated.filter(
        (inacttiveEmployee) => inacttiveEmployee.status !== "Active"
      )
    );

    toast.success(`${employee.first_name} ${employee.last_name} is activated`);
  };

  const pageContent = (
    <div>
      <EmployeeTable
        employees={inActiveEmployee}
        tableHeadings={tableHeadings}
        menu={employeeMenu}
        description={description}
        onActivation={handleActivation}
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

export default EmployeeActivation;
