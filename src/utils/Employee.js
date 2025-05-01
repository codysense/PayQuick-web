import avatar from "../images/men_avatar.png";

const importAll = (requireContext) => {
  return requireContext.keys().map((key) => {
    return {
      src: requireContext(key),
      alt: `Image of ${key}`,
    };
  });
};

// Dynamically import images from the folder
const images = importAll(
  require.context("../images/BlackFaces", false, /\.(png|jpe?g|svg)$/)
);

export function getprofilePictures() {
  return images;
}

const profilePictures = getprofilePictures();

const employees = [
  {
    //Personal Information
    StaffID: "000",
    first_name: "",
    last_name: "",
    marital: "",
    gender: "",
    street_Address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    primary_number: "",
    dob: "",
    whatsapp_number: "",
    religion: "",
    status: "",
    hire_Date: "",

    //Next of Kin Information
    nok_fullname: "",
    nok_relationship: "",
    nok_fullname_gender: "",
    nok_phoneNumber: "",
    nok_street_address: "",
    nok_city: "",
    nok_state: "",
    nok_country: "",

    //Guarantor Information
    guarantor_fullname: "",
    guarantor_business_address: "",
    guarantor_phoneNumber: "",
    guarantor_street_address: "",
    guarantor_city: "",
    guarantor_state: "",
    guarantor_country: "",
    guarantor_occupation: "",

    //Financial Information
    financial_bank: "",
    financial_account_number: "",
    financial_account_name: "",
    financial_PFA_id: "",
    financial_PFA_manager: "",
    department: "",
    cader: "",

    username: "",
    password: "",
    profile_picture: avatar,
  },
  {
    //Personal Information
    StaffID: "001",
    first_name: "Jeleel",
    last_name: "Kolapo",
    marital: "Married",
    gender: "Male",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "jeleel@codysense.com",
    primary_number: "08033124491",
    dob: "1985-06-26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Active",
    hire_Date: "2024-0-/12",

    //Next of Kin Information
    nok_fullname: "Oladose Taiwo",
    nok_relationship: "Uncle",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Access Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Finance",
    cader: "Manager",

    username: "abu-umar",
    password: "4321",
    profile_picture: profilePictures[0],
  },

  {
    //Personal Information
    StaffID: "002",
    first_name: "Oladele",
    last_name: "Toyosi",
    marital: "Married",
    gender: "Male",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "peter@gmail.com",
    primary_number: "08033124491",
    dob: "1985/06/26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Inactive",
    hire_Date: "2024/07/12",

    //Next of Kin Information
    nok_fullname: "Oladose Segun",
    nok_relationship: "Father",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Access Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Admin",
    cader: "Manager",

    username: "ololade",
    password: "1234",
    profile_picture: profilePictures[1],
  },

  {
    //Personal Information
    StaffID: "003",
    first_name: "Rebecca",
    last_name: "Adepeju",
    marital: "Married",
    gender: "Female",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "jeleel@codysense.com",
    primary_number: "08033124491",
    dob: "1985/06/26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Inactive",
    hire_Date: "2024/07/12",

    //Next of Kin Information
    nok_fullname: "Oladose Taiwo",
    nok_relationship: "Uncle",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Sterling Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Admin",
    cader: "Manager",

    username: "rebecca",
    password: "123",
    profile_picture: profilePictures[2],
  },

  {
    //Personal Information
    StaffID: "004",
    first_name: "Sharon",
    last_name: "Olawale",
    marital: "Married",
    gender: "Fale",
    street_address: "Zone C 12 Dagbolu Community",
    city: "Osogbo",
    state: "Osun State",
    country: "Nigeria",
    email: "sharon@codysense.com",
    primary_number: "08033124491",
    dob: "1985-06-26",
    whatsapp_number: "09033124481",
    religion: "Islam",
    status: "Active",
    hire_Date: "2024-0-/12",

    //Next of Kin Information
    nok_fullname: "Oladose Taiwo",
    nok_relationship: "Uncle",
    nok_fullname_gender: "Male",
    nok_phoneNumber: "09032761345",
    nok_street_address: "Zone C Dagbolu Community",
    nok_city: "Osogbo",
    nok_state: "Osun",
    nok_country: "NIgeria",

    //Guarantor Information
    guarantor_fullname: "Kunle Oyewole",
    guarantor_business_address:
      "Shop 22A Oladosu Shopping Complex, Okefia Osogbo Osun State",
    guarantor_phoneNumber: "08134876512",
    guarantor_street_address: "Zone 2B Oroki Housing Extension",
    guarantor_city: "Osogbo",
    guarantor_state: "Osun State",
    guarantor_country: "Nigeria",
    guarantor_occupation: "Public Servant",

    //Financial Information
    //Financial Information
    financial_bank: "Access Bank",
    financial_account_number: "0932127612",
    financial_account_name: "Jeleel Kolapo",
    financial_PFA_id: "098723",
    financial_PFA_manager: "Stambic IBTC",
    department: "Production",
    cader: "Supervisor",

    username: "sharon",
    password: "12345",
    profile_picture: profilePictures[3],
  },
];

const users = [
  { username: "user1", password: "12345", role: "manager", department: "HR" },
  {
    username: "user2",
    password: "12345",
    role: "Supervisor",
    department: "Admin",
  },
];
export function getUsers() {
  return users;
}

export function saveEmployee(newEmployee) {
  const updatedEmployee = employees.some(
    (employee) => employee.StaffID === newEmployee.StaffID
  )
    ? employees.map((employee) =>
        employee.StaffID === newEmployee.StaffID
          ? { ...employee, ...newEmployee }
          : employee
      )
    : [
        ...employees,
        { ...newEmployee, Status: "Active", HireDate: Date.now().toString() },
      ];

  return updatedEmployee;
}

export function getManagerID() {
  return employees.find(
    (e) => e.department === "Admin" && e.cader === "Manager"
  ).StaffID;
}

export function updateEmployee(employeeDetails) {
  return employees.map((employee) =>
    employee.StaffID === employeeDetails.StaffID
      ? { ...employee, ...employeeDetails }
      : employee
  );
}

export function getEmployees() {
  return employees;
}

export function getEmployee(employeeID) {
  return employees.find((employee) => employee.StaffID === employeeID);
}

export function deleteEmployee(employeeID) {
  return employees.filter((employee) => employee.StaffID !== employeeID);
}

export function activateEmployee(employeeID) {
  const employee = employees.find(
    (employee) => employee.StaffID === employeeID
  );
  if (!employee) return null;
  const updatedData = { ...employee, Status: "Active" };
  return updateEmployee(updatedData);
}

//Department data
const departments = [
  { code: "adm", name: "Admin" },
  { code: "sls", name: "Sales" },
  { code: "prd", name: "Production" },
  { code: "act", name: "Account" },
];

export function getDepartments() {
  return departments;
}

export function getDeptCode(deptName) {
  return (
    departments.find((department) => department.name === deptName)?.code || ""
  );
}

export function addDepartment(department) {
  const checkDuplicate = departments.find(
    (dept) => dept.name === department.name
  );
  if (checkDuplicate) return null;
  return [...departments, department];
}

//Staff Identification info
const staffIDs = [
  { prefix: "act", number: "001" },
  { prefix: "prd", number: "001" },
  { prefix: "adm", number: "001" },
  { prefix: "adm", number: "002" },
];

export function generateStaffID(prefix) {
  const id = String(getNextStaffIDNumber(prefix)).padStart(3, 0);
  return `${prefix}-${id}`;
}

function getNextStaffIDNumber(prefix) {
  const filteredStaff = staffIDs.filter((s) => s.prefix === prefix);

  if (filteredStaff.length === 0) {
    return 1;
  }

  const highestDeptNumber = Math.max(
    ...filteredStaff.map((staff) => parseInt(staff.number, 10))
  );

  return highestDeptNumber + 1;
}

//Leave Management
const staffLeave = [
  {
    staffID: "001",
    annual_leave_bal: 26,
  },
  {
    staffID: "002",
    annual_leave_bal: 28,
  },
  {
    staffID: "003",
    annual_leave_bal: 15,
  },
  {
    staffID: "004",
    annual_leave_bal: 15,
  },
];

export function getAnnualLeaveBal(id) {
  const staff = staffLeave.find((l) => l.staffID === id);
  return staff ? staff.annual_leave_bal : null;
}

const leaveRequests = [
  {
    StaffID: "001",
    fullname: "Jeleel Kolapo",
    department: "Finance",
    cader: "Manager",
    from: "12-14-2024",
    to: "12-28-2024",
    period: 14,
    reason: "Education",
    status: "Pending",
  },

  {
    StaffID: "002",
    fullname: "Oladele Taiwo",
    department: "Admin",
    cader: "Manager",
    from: "12-16-2024",
    to: "12-28-2024",
    period: 12,
    reason: "Education",
    status: "Pending",
  },

  {
    StaffID: "003",
    fullname: "Adewale Saheed",
    department: "Production",
    cader: "Supervisor",
    from: "12-16-2024",
    to: "12-28-2024",
    period: 12,
    reason: "Education",
    status: "Pending",
  },
];

export function getLeaveRequets() {
  return leaveRequests;
}

//Suspension Data

const annual_suspension_count = [
  {
    StaffID: "001",
    suspension_count: 1,
  },
  {
    StaffID: "002",
    suspension_count: 3,
  },
  {
    StaffID: "003",
    suspension_count: 2,
  },
  {
    StaffID: "004",
    suspension_count: 4,
  },
];

export function getAnnualSuspensionCount() {
  try {
    return annual_suspension_count;
  } catch (error) {
    console.error(error);
  }
}

const suspended_staff = [
  {
    StaffID: "001",
    fullname: "Jeleel Kolapo",
    department: "Finance",
    cader: "Manager",
    from: "1-14-2025",
    to: "1-28-2025",
    period: 14,
    reason: "theft",
    status: "Active",
  },

  {
    StaffID: "002",
    fullname: "Oladele Taiwo",
    department: "Admin",
    cader: "Manager",
    from: "1-16-2025",
    to: "1-28-2025",
    period: 12,
    reason: "Work negligence",
    status: "Active",
  },
  {
    StaffID: "003",
    fullname: "Adewale Saheed",
    department: "Production",
    cader: "Supervisor",
    from: "12-16-2024",
    to: "1-2-2025",
    period: 12,
    reason: "Suspend due to insurbordination",
    status: "Concluded",
  },
];

export function getSuspendedStaff() {
  return suspended_staff;
}

const designation = [
  {
    id: "001",
    name: "Managing Director",
  },
  {
    id: "002",
    name: "Acting Managing Director",
  },

  {
    id: "003",
    name: "General Manager",
  },
  {
    id: "004",
    name: "Acting General Manager",
  },

  {
    id: "005",
    name: "Assstant General Manager",
  },
  {
    id: "006",
    name: "Manager",
  },
  {
    id: "007",
    name: "Acting Manager",
  },

  {
    id: "008",
    name: "Assistant Manager",
  },
  {
    id: "009",
    name: "Supervisor",
  },
];

export function getDesignation() {
  return designation;
}

const salary_matrices = [
  {
    cader: "Manager",
    basic: 36967.0,
    trans: 9250.0,
    house: 3700.0,
    clothing: 3500.0,
    meal: 3500.0,
    entertainment: 3833.0,
    medical: 4000.0,
    ce: 0.0,
    leave: 2000.0,
    others: 0.0,
    gross: 0.0,
    relief: 0.0,
    taxIncome: 0.0,
    NSITF: 0.0,
    ITF: 0.0,
    pension: 0.0,
    paye: 0.0,
    debt: 0.0,
    totalDed: 0.0,
    netPay: 0.0,
    specialBonus: 0.0,
  },
];

export function getSalaryMatrices() {
  return  salary_matrices? salary_matrices: null;
}

export function calculateGross(cader) {

  const matrix = getSalaryMatrices().find((s) => s.cader === cader);
  if (!matrix) return 0;
  const keys = Object.keys(matrix); 
 const result =   keys.reduce((acc, key) => {
      
      if (key === "gross" || key === "cader") {
        return acc;
      }
      return acc + matrix[key];
    },0);

    return result;
}
