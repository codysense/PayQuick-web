import React, { useState } from "react";
import { getHRJobsMenus } from "../components/Menus";
import { getLeaveRequets, getEmployees } from "../utils/Employee";
import PageTemplates from "../common/PageTemplates";
import { toast } from "react-toastify";
import LeaveTable from "../components/LeaveTable";
import { add } from "../common/notifications";

const employeeMenu = getHRJobsMenus().filter(
  (menu) => menu.name === "Approve Employee Leave"
);

const leave_list = getLeaveRequets().filter((l) => l.status === "Pending");
const pageTitle = "Leave Requests";
const description = "List of pending leave requests";

const tableHeadings = [
  "Name",
  "Title",
  "From",
  "To",
  "Leave Day",
  " Reason",
  "Status",
];
const action = "Approve";

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

const ApproveLeave = () => {
  const [pending_leave, setPending_leave] = useState(leave_list);
  
  const handleReject = (staff) => {
    const reject_leave = pending_leave.find((l) => l.StaffID === staff.StaffID);

    if (!reject_leave) return null;

    setPending_leave(
      pending_leave.filter((l) => l.StaffID !== reject_leave.StaffID)
    );

    const notification_details = `Your leave between ${reject_leave.from} and ${reject_leave.to} is not approved. \n Kindly meet HR Manager for more details.`;
    const notification = "Your leave has been rejected";
    add(notification, staff.StaffID, notification_details);

    toast.error(`${reject_leave.fullname}'s leave is rejected`);
  };

  const populateRecipients = (staff) => {
    const notificationRecipients = [];
    const employees = getEmployees().filter((m) => m.cader === "Manager");
    employees.map((m) =>
      m.department === "Finance" ||
      m.department === "Admin" ||
      m.department === staff.department
        ? notificationRecipients.push(m.StaffID)
        : ""
    );

    return notificationRecipients;
  };

  const handleApproval = (StaffID) => {
    // const activated = activateEmployee(StaffID);

    const leave = pending_leave.find((l) => l.StaffID === StaffID);
    const updatedRecipients = populateRecipients(leave);
    const recipients = updatedRecipients.includes(leave.StaffID)
      ? updatedRecipients
      : updatedRecipients.push(leave.StaffID);
    console.log(recipients);

    if (!leave) return null;
    const updatedData = { ...leave, Status: "Approved" };

    const unApproved = pending_leave.map((staff) =>
      staff.StaffID === updatedData.StaffID
        ? { ...pending_leave, ...updatedData }
        : staff
    );

    setPending_leave(
      unApproved.filter(
        (unapproved_leave) => unapproved_leave.Status !== "Approved"
      )
    );

    const notification_details = `Your leave between ${leave.from} and ${leave.to} has been approved. \n I wish you happy holiday from work.`;
    const notification = "Your leave has been approved";
    add(notification, recipients, notification_details);

    toast.success(`${leave.fullname} leave is approved`);
  };

  const pageContent = (
    <div>
      <LeaveTable
        leave={pending_leave}
        tableHeadings={tableHeadings}
        menu={employeeMenu}
        description={description}
        onActivation={handleApproval}
        actionState={action}
        editPage={true}
        onDelete={handleReject}
      />
    </div>
  );

  return (
    <div>
      <PageTemplates pageTitle={pageTitle} pageContent={pageContent} />
    </div>
  );
};

export default ApproveLeave;
