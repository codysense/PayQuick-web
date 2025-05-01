import React, { useState } from "react";
import { getHRJobsMenus } from "../components/Menus";
import {  getEmployees, getSuspendedStaff } from "../utils/Employee";
import PageTemplates from "../common/PageTemplates";
import { toast } from "react-toastify";
import LeaveTable from "../components/LeaveTable";
import { add } from "../common/notifications";

const employeeMenu = getHRJobsMenus().filter(
  (menu) => menu.name === "Reverse Issued Suspension"
);

const suspension_list = getSuspendedStaff().filter((l) => l.status === "Active");
const pageTitle = "Active Suspended Staff";
const description = "Details of Active Suspension";

const tableHeadings = [
  "Name",
  "Title",
  "From",
  "To",
  "Suspension Days",
  " Reason",
  "Status",
];
const action = "Cancel Suspension";

const CancelSuspension = () => {
    const [activeSuspension, setActiveSuspension] = useState(suspension_list);
  
    const handleCancellation = (StaffID) => {
      const active_suspension = activeSuspension.find((l) => l.StaffID === StaffID);
  
      if (!active_suspension) return null;
  
      setActiveSuspension(
        activeSuspension.filter((l) => l.StaffID !== active_suspension.StaffID)
      );
  
      const notification_details = `Your suspension between ${active_suspension.from} and ${active_suspension.to}  has been cancelled. \n I hope you have learned from your misoconduct and ready to abide by the company policy. \n HR Manager`;
      const notification = "Your suspension has been cancelled";
      add(notification, populateRecipients(active_suspension), notification_details);
  
      toast.error(`${active_suspension.fullname}'s suspension is cancelled`);
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
  
      return notificationRecipients.includes(staff.StaffID)? notificationRecipients:notificationRecipients.push(staff.StaffID);
    };
  
    // const handleApproval = (StaffID) => {
    //   // const activated = activateEmployee(StaffID);
  
    //   const leave = activeSuspension.find((l) => l.StaffID === StaffID);
    //   const updatedRecipients = populateRecipients(leave);
    //   const recipients = updatedRecipients.includes(leave.StaffID)
    //     ? updatedRecipients
    //     : updatedRecipients.push(leave.StaffID);
    //   console.log(recipients);
  
    //   if (!leave) return null;
    //   const updatedData = { ...leave, Status: "Approved" };
  
    //   const unApproved = activeSuspension.map((staff) =>
    //     staff.StaffID === updatedData.StaffID
    //       ? { ...activeSuspension, ...updatedData }
    //       : staff
    //   );
  
    //   setActiveSuspension(
    //     unApproved.filter(
    //       (unapproved_leave) => unapproved_leave.Status !== "Approved"
    //     )
    //   );
  
    //   const notification_details = `Your leave between ${leave.from} and ${leave.to} has been approved. \n I wish you happy holiday from work.`;
    //   const notification = "Your leave has been approved";
    //   add(notification, recipients, notification_details);
  
    //   toast.success(`${leave.fullname} leave is approved`);
    // };
  
    const pageContent = (
      <div>
        <LeaveTable
          leave={activeSuspension}
          tableHeadings={tableHeadings}
          menu={employeeMenu}
          description={description}
          actionState={action}
          editPage={false}
          onActivation={handleCancellation}
        />
      </div>
    );
  
    return (
      <div>
        <PageTemplates pageTitle={pageTitle} pageContent={pageContent} />
      </div>
    );
  }

export default CancelSuspension