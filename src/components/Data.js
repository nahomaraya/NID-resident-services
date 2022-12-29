
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
  DownIcon,
  FingerIcon,
  HistIcon
 
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
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "Track Request Status",
    instruction: "This feature will allow an individual to track status of his/her UIN generation",
    path: "trs",
    input: "Please enter your RID",
   
    icon: <CalendarIcon />,
  },
  {
    id: 4,
    name: "Lock/Unlock AUTH types",
    instruction: "An individual can decide to lock/unlock specific Authentication Types (Demographic/Biometrics) of his/her UIN/VID for security reasons",
    path: "lut",
    input: "Please enter your UIN/VID",
    subCard : [
      {
        id: 1,
        name: "Lock",
        instruction: "Lock stuff",
        icon:  <LockIcon />
      },
      {
        id: 2,
        name: "Unlock",
        instruction: "Unlock stuff",
        icon:  <LockIcon />
      }
    ],
    icon: <LockIcon />,
  },
  {
    id: 5,
    name: "Download e-UIN",
    instruction: "This feature will allow an individual to download his/her electronic UIN",
    input: " Please enter your UIN/VID",
    path: "uin",
    icon: <DownIcon />,
  },
 
  {
    id: 6,
    name: "Reprint UIN",
    instruction: "This feature will allow an individual to raise reprint request of his/her UIN",
    input: "Please enter your UIN/VID",
    path: "reprint",
    icon: <FingerIcon />,
  },
  {
    id: 7,
    name: "View Authentication Transaction History",
    instruction: "This feature will allow an individual to view history of the authentication request(s) associated to his/her UIN",
    input: "Please enter your UIN/VID",
    path: "trans",
    icon: <HistIcon/>,
  },
  {
    id: 8,
    name: "Generate/Revoke Virtual ID (VID)",
    instruction: "To safeguard the confidentiality of a UIN and for its security, Virtual ID (VID) service is provided",
    input: "Please enter your UIN",
    path: "vid",
    subCard : [
      {
        id: 1,
        name: "Generate",
        instruction: "Generate stuff"
      },
      {
        id: 2,
        name: "Revoke",
        instruction: "Revoke stuff"
      }
    ],
    icon: <AuthIcon />,
  },
  
];
