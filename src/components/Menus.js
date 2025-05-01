import {
  UserPlus,
  ScreenShare,
  ShieldCheck,
  ShieldMinus,
  UserMinus2,
  HandCoins,
  Stamp,
  Handshake,
  UserCheck2,
  Group,
  BookOpenText,
  BriefcaseBusiness,
  BriefcaseMedical,
  ShieldBan,
} from "lucide-react";

const employeeMenus = [
  {
    name: "New Employee",
    description:
      "Enter newly recruited employee information into the system to initiate their onboarding process.",
    to: `/EmployementForm/`,
    icon: UserPlus,
  },
  {
    name: "Modify Employee Information",
    description:
      "Employee Information modification such as editing or deleting employee information can be done on this page",
    to: "/EmployeeList",
    icon: UserMinus2,
  },
  {
    name: "New Department",
    description:
      "Create a new department in the system. You can also modify department information by providing the department name.",
    to: "/department",
    icon: ScreenShare,
  },
  {
    name: "Activate Employee",
    description:
      "Reactivate a suspended employee or an employee on unpaid leave.",
    to: "/EmployeeActivation",
    icon: ShieldCheck,
  },
  {
    name: "Dectivate Employee",
    description:
      "Remove an employee from active status, terminating their entitlement to salary and other benefits.",
    to: "/EmployeeDeActivation",
    icon: ShieldBan,
  },
  {
    name: "Leave Request",
    description:
      "Employees can request both paid and unpaid leave. Additionally, you can request a leave extension.",
    to: "/leaveRequest",
    icon: ShieldMinus,
  },
  {
    name: "Request for Salary Advance",
    description:
      "Employees can request a salary advance from their next payment.",
    to: "#",
    icon: HandCoins,
  },
];
export function getEmployeeMenus() {
  return employeeMenus;
}

const HRJobsMenus = [
  {
    name: "Approve Employee Leave",
    description:
      "Approve employee leave when all leave conditions are satisfied.",
    href: "/leaveapproval",
    icon: Stamp,
  },
  {
    name: "Approve Salary Advance",
    description:
      "Authorize a salary advance request once all conditions are satisfied.",
    href: "#",
    icon: Handshake,
  },
  {
    name: "Issue Suspension Notice",
    description:
      "Place an employee on suspension, specifying the duration and associated terms.",
    href: "/suspension",
    icon: UserMinus2,
  },
  {
    name: "Reverse Issued Suspension",
    description: "Revoke a previously issued suspension for an employee.",
    href: "/cancelsuspension",
    icon: UserCheck2,
  },
];

export function getHRJobsMenus() {
  return HRJobsMenus;
}

const payrollMenus = [
  {
    name: "Create Designation",
    description:
      "Create or modify designation for all employee.",
    href: "/designation",
    icon: Group,
  },
  {
    name: "Create Salary Matrix",
    description: "Create or modify the salary matrix for all salary cadres.",
    href: "/salarymatrix",
    icon: BookOpenText,
  },
  {
    name: "Prepare Payroll",
    description: "Prepare the payroll for all staff in your organization.",
    href: "#",
    icon: BriefcaseBusiness,
  },
  {
    name: "Prepare Addtional Payroll",
    description:
      "Prepare an additional payroll for newly registered employees. You can also modify the prepared payroll for a staff member if the salary is still open. ",
    href: "#",
    icon: BriefcaseMedical,
  },
];

export function getPayrollMenus() {
  return payrollMenus;
}
