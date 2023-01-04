
import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  LockIcon,
  Lock,
  DownIcon,
  FingerIcon,
  HistIcon,
  SafetyIcon
  
 
} from "./Icons";

export const langs = [
  {
    id: 1,
    code: 'en',
    name: 'English'
  },
  {
    id: 2,
    code: 'amh',
    name: 'Amharic'
  }
]

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Home",
    path: "",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Update Demographic Data",
    instruction: "This feature will allow an individual to initiate update of his/her demographic details",
    path: "udd",
    input: "Please enter your UIN/VID",
    action: "Are you sure you want to update your demographic data",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "Track Request Status",
    instruction: "This feature will allow an individual to track status of his/her UIN generation",
    path: "trs",
    input: "Please enter your RID",
   action: "Are you sure you want to track your request status",
    icon: <CalendarIcon />,
  },
  {
    id: 4,
    name: "Lock AUTH types",
    instruction: "An individual can decide to lock/unlock specific Authentication Types (Demographic/Biometrics) of his/her UIN/VID for security reasons",
    path: "lut",
    input: "Please enter your UIN/VID",
    action: "Are you sure you want to lock your authentication type",
    icon: <Lock />,
  },
  {
    id: 5,
    name: "Unlock AUTH types",
    instruction: "An individual can decide to lock/unlock specific Authentication Types (Demographic/Biometrics) of his/her UIN/VID for security reasons",
    path: "ult",
    input: "Please enter your UIN/VID",
    action: "Are you sure you want to unlock your authentication type",
    icon: <LockIcon />,
  },
  {
    id: 6,
    name: "Download e-UIN",
    instruction: "This feature will allow an individual to download his/her electronic UIN",
    input: " Please enter your UIN/VID",
    path: "uin",
    action: "Are you sure you want to download your UIN",
    icon: <DownIcon />,
  },
 
  {
    id: 7,
    name: "Reprint UIN",
    instruction: "This feature will allow an individual to raise reprint request of his/her UIN",
    input: "Please enter your UIN/VID",
    path: "reprint",
    action: "Are you sure you want to reprint your UIN",
    icon: <FingerIcon />,
  },
  {
    id: 8,
    name: "View Authentication Transaction History",
    instruction: "This feature will allow an individual to view history of the authentication request(s) associated to his/her UIN",
    input: "Please enter your UIN/VID",
    path: "trans",
    action: "Are you sure you want to view your authentication history",
    icon: <HistIcon/>,
  },
  {
    id: 9,
    name: "Generate Virtual ID (VID)",
    instruction: "To safeguard the confidentiality of a UIN and for its security, Virtual ID (VID) service is provided",
    input: "Please enter your UIN",
    path: "vid",
    action: "Are you sure you want to generate your virutal ID",
    icon: <AuthIcon />,
  },
  {
    id: 10,
    name: "Revoke Virtual ID (VID)",
    instruction: "To safeguard the confidentiality of a UIN and for its security, Virtual ID (VID) service is provided",
    input: "Please enter your UIN",
    path: "vid",
    action: "Are you sure you want to revoke your virtual ID",
    icon: <SafetyIcon />,
  },
  
];
