import { Home, HomeIcon, Stethoscope } from "lucide-react";
import {
  UserCheck,
  HeartPulse,
  CalendarCheck,
  BedDouble,
  FlaskConical,
  Pill,
  CreditCard,
  FileText,
  Megaphone,
  Boxes,
  UserCircle,
  MapPinned,
  PhoneCall,
  Clock,
  AlarmCheck,
  ClipboardList,
  FileHeart,
  TestTube,
  ActivitySquare,
  BookOpenCheck,
} from "lucide-react";

export const adminMenu = [
  { label: "Home", icon: HomeIcon, path: "/admin/dashboard" },
  { label: "Doctors", icon: Stethoscope, path: "/admin/doctors" },
  {
    label: "Nurses and Staff",
    icon: Stethoscope,
    path: "/admin/nursesandstaff",
  },

  { label: "Patients", icon: HeartPulse, path: "/admin/patients" },
  { label: "Appointments", icon: CalendarCheck, path: "/admin/appointments" },
  { label: "Rooms and Beds", icon: BedDouble, path: "/admin/roomsandbeds" },
  { label: "Laboratory", icon: FlaskConical, path: "/admin/labrotary" },
  { label: "Pharmacy", icon: Pill, path: "/admin/pharmacy" },
  {
    label: "Billing and Payments",
    icon: CreditCard,
    path: "/admin/billingandpayments",
  },
  { label: "Reports", icon: FileText, path: "/admin/reports" },
  { label: "Complaints", icon: Megaphone, path: "/admin/complaints" },
  { label: "Inventory", icon: Boxes, path: "/admin/inventory" },
  {
    label: "Shifts and Schedules",
    icon: Clock,
    path: "/admin/shiftsandschedules",
  },
  { label: "Emergency Alerts", icon: AlarmCheck, path:"/admin/emergencyalerts" },

  { label: "Attendance", icon: ClipboardList, path:"/admin/attendance" },
  { label: "Mortuary Records", icon: BookOpenCheck, path:"/admin/mortuaryrecords" },
];

export const doctorMenu = [
  { label: "Doctors", icon: Stethoscope, path: "/doctor/dashboard" },
  { label: "Home", icon: Stethoscope, path: "/doctor/home" },
];

export const EmergencyMenu = [
  {
    label: "Home",
    icon: Home,
    path: "/emergency/dashboard",
  },
  {
    label: "Patient Details",
    icon: UserCircle,
    path: "/emergency/patientdetails",
  },
  {
    label: "Ambulance Tracking",
    icon: MapPinned, // or Ambulance if available
    path: "/emergency/ambulancetracking",
  },
  {
    label: "Staff Contact",
    icon: PhoneCall,
    path: "/emergency/staffcontact",
  },
];

export const LabrotaryMenu = [
  { label: "Home", icon: HomeIcon, path: "/labrotary/dashboard" },
  {
    label: "Pending Tests",
    icon: FlaskConical,
    path: "/labrotary/pendingtest",
  },
  {
    label: "Sample Collection",
    icon: TestTube,
    path: "/labrotary/samplecollection",
  },
  {
    label: "Equipment Availability",
    icon: ActivitySquare,
    path: "/labrotary/equipmentavailability",
  },
  {
    label: "Patient Test History",
    icon: FileHeart,
    path: "/labrotary/patienttesthistory",
  },
  { label: "LabDetails", icon: ClipboardList, path: "/labrotary/labdetails" },
];

export const InventoryMenu = [
  { label: "Home", icon: HomeIcon, path: "/inventory/dashboard" },
  // {
  //   label: "Stock Usage",
  //   icon: FlaskConical,
  //   path: "/inventory/stockusage",
  // },
];

// export const adminMenu = [
//   { label: "Dashboard", path: "/admin/dashboard", icon: "📊" },

//   {
//     label: "Company",
//     icon: "🏢",
//     submenu: [
//       { label: "Departments", path: "/admin/company/departments" },
//       { label: "Designations", path: "/admin/company/designations" },
//     ],
//   },

//   {
//     label: "Employees",
//     icon: "👥",
//     submenu: [
//       { label: "All Employees", path: "/admin/employees/all-emplyees" },
//       { label: "Add Employee", path: "/admin/employees/add" },
//       { label: "Employee Types", path: "/admin/employees/types" },
//       { label: "Attendance", path: "/admin/employees/attendance" },
//     ],
//   },

//   {
//     label: "Projects",
//     icon: "🧩",
//     submenu: [
//       { label: "All Projects", path: "/admin/projects/all-projects" },
//       { label: "Create Project", path: "/admin/projects/create" },
//       { label: "Project Categories", path: "/admin/projects/categories" },
//     ],
//   },

//   {
//     label: "Clients",
//     icon: "🤝",
//     submenu: [
//       { label: "All Clients", path: "/admin/clients/all-clients" },
//       { label: "Add Client", path: "/admin/clients/add-clients" },
//     ],
//   },

//   {
//     label: "HR & Payroll",
//     icon: "📄",
//     submenu: [
//       { label: "Leave Requests", path: "/admin/hr/leave-requests" },
//       { label: "Salaries", path: "/admin/hr/salaries" },
//       { label: "Payslips", path: "/admin/hr/payslips" },
//     ],
//   },

//   {
//     label: "Finance",
//     icon: "💰",
//     submenu: [
//       { label: "Invoices", path: "/admin/finance/invoices" },
//       { label: "Expenses", path: "/admin/finance/expenses" },
//     ],
//   },

//   {
//     label: "Reports",
//     icon: "📈",
//     submenu: [
//       { label: "Project Reports", path: "/admin/reports/projects" },
//       { label: "Employee Reports", path: "/admin/reports/employees" },
//     ],
//   },

//   {
//     label: "System",
//     icon: "⚙️",
//     submenu: [
//       { label: "Settings", path: "/admin/settings" },
//       { label: "Notifications", path: "/admin/notifications" },
//       { label: "Roles & Permissions", path: "/admin/roles" },
//     ],
//   },

//   { label: "Logout", path: "/", icon: "🚪" },
// ];
