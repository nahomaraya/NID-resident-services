
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
    name: "home",
    path: "",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "update-demographic-data",
    instruction: "update-demographic-data-inst",
    path: "udd",
    input: "UIN/VID",
    action: "update-demographic-data-action",
    icon: <LayoutIcon />,
  },
  {
    id: 3,
    name: "track-request-status",
    instruction: "track-request-status-inst",
    path: "trs",
    input: "RID",
   action: "track-request-status-action",
    icon: <CalendarIcon />,
  },
  {
    id: 4,
    name: "lock-auth-type",
    instruction: "lock-auth-type-inst",
    path: "lut",
    input: "UIN/VID",
    action: "lock-auth-type-action",
    icon: <Lock />,
  },
  {
    id: 5,
    name: "unlock-auth-type",
    instruction: "unlock-auth-type-inst",
    path: "ult",
    input: "UIN/VID",
    action: "unlock-auth-type-action",
    icon: <LockIcon />,
  },
  {
    id: 6,
    name: "download-eUIN",
    instruction: "download-eUIN-inst",
    input: "UIN/VID",
    path: "uin",
    action: "download-eUIN-action",
    icon: <DownIcon />,
  },
 
  {
    id: 7,
    name: "reprint-uin",
    instruction: "reprint-uin-inst",
    input: "UIN/VID",
    path: "reprint",
    action: "reprint-uin-action",
    icon: <FingerIcon />,
  },
  {
    id: 8,
    name: "view-trans-hist",
    instruction: "view-trans-hist-inst",
    input: "UIN/VID",
    path: "trans",
    action: "view-trans-hist-action",
    icon: <HistIcon/>,
  },
  {
    id: 9,
    name: "generate-virtual-id",
    instruction: "generate-virtual-id-inst",
    input: "UIN",
    path: "vid",
    action: "generate-virtual-id-action",
    icon: <AuthIcon />,
  },
  {
    id: 10,
    name: "revoke-virtual-id",
    instruction: "revoke-virtual-id-inst",
    input: "UIN",
    path: "vid",
    action: "revoke-virtual-id-action",
    icon: <SafetyIcon />,
  },
  
];
