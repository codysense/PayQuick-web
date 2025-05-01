import React, { useState } from "react";
import { getEmployeeMenus } from "../components/Menus";
import { getEmployees } from "../utils/Employee";
import EmployeeTable from "../components/EmpoyeeTable";
import PageTemplates from "../common/PageTemplates";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const employeeMenu = getEmployeeMenus().filter(
  (menu) => menu.name === "New Employee"
);

const employees = getEmployees().filter(
  (employee) => employee.StaffID !== "000"
);
const pageTitle = "List of Employee";
const description = "List of active and inactive Employees";

const tableHeadings = ["Name", "Title", "EmploymentStatus", "HireDate"];
const action = "Edit";

const EmployeeList = () => {
  const [allEmployee, setAllEmployee] = useState(employees);
  const navigate = useNavigate();

  const handleEditing = (StaffID) => {
    console.log(StaffID);
    navigate("/employementform", { state: { StaffID } });
  };

  const handleDelete = (Staff) => {
    setAllEmployee((prevEmployees) =>
      prevEmployees.filter((employee) => employee.StaffID !== Staff.StaffID)
    );
    toast.success(`${Staff.Firstname} ${Staff.Lastname} is deleted`)
  };

  const pageContent = (
    <div>
      <EmployeeTable
        employees={allEmployee}
        tableHeadings={tableHeadings}
        menu={employeeMenu}
        description={description}
        onActivation={handleEditing}
        actionState={action}
        editPage={true}
        onDelete={handleDelete}
      />
    </div>
  );

  return (
    <div>
      <PageTemplates pageTitle={pageTitle} pageContent={pageContent} />
    </div>
  );
};

export default EmployeeList;
