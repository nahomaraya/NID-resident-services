
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
  SafetyIcon,
  AboutIcon,
  ServicesIcon,
  ContactIcon,
  ArrowUp,
  ArrowDown
  
 
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
    name: "about",
    path: "/about",
    icon: <AboutIcon />,
  },
  {
    id: 3,
    name: "contact",
    path: "/contact",
    icon: <ContactIcon />,
  },
 
  {
    id: 4,
    name: "services",
    path: "/services",
    icon: <ServicesIcon />,
    iconClosed: <ArrowDown/>,
    iconOpened: <ArrowUp/>,
    subMenu: [
      {
        id: 1,
        name: "update-demographic-data",
        instruction: "update-demographic-data-inst",
        path: "/udd",
        input: "UIN/VID",
        action: "update-demographic-data-action",
        request: "demographics",
        otpReq: true,
        apiID: "mosip.resident.updateuin",
        icon: <LayoutIcon />,
        image: 'demographic.jpg',
        documents: [
          "name",
          "email",
          "phone",
          "address",
        ]
       
      },
      {
        id: 2,
        name: "track-request-status",
        instruction: "track-request-status-inst",
        path: "trs",
        input: "RID",
        otpReq: false,
        action: "track-request-status-action",
        apiID: "mosip.resident.checkstatus",
        icon: <CalendarIcon />,
        image: 'request.jpg'
      },
      {
        id: 3,
        name: "auth-type",
        instruction: "auth-type-inst",
        path: "lut",
        input: "UIN/VID",
        otpReq: true,
        action: "auth-type-action",
        request: "authType",
        apiID: "mosip.resident.auth",
        icon: <Lock />,
        image: 'lockUnlock.png',
        types: [
          'Demographic Auth Type',
          'Biometric Auth Type',
          'Biometirc-FMR Auth Type',
          'Biometirc-IIR Auth Type',
          'Biometric-FID Auth Type '
        ]
      },
     
      {
        id: 4,
        name: "download-eUIN",
        instruction: "download-eUIN-inst",
        input: "UIN/VID",
        otpReq: true,
        path: "uin",
        action: "download-eUIN-action",
        request: "cardType",
        apiID: "mosip.resident.euin",
        icon: <DownIcon />,
        image: 'download.jpg'
      },
     
      {
        id: 5,
        name: "reprint-uin",
        instruction: "reprint-uin-inst",
        input: "UIN/VID",
        otpReq: true,
        path: "reprint",
        action: "reprint-uin-action",
        request: "cardType",
        apiID: "mosip.resident.reprintuin",
        icon: <FingerIcon />,
        image: 'reprint.jpg'
      },
      {
        id: 6,
        name: "view-trans-hist",
        instruction: "view-trans-hist-inst",
        input: "UIN/VID",
        otpReq: true,
        path: "trans",
        action: "view-trans-hist-action",
        apiID: "mosip.resident.authhistory",
        icon: <HistIcon/>,
        image: 'authhistory.jpg'
      },
      {
        id: 7,
        name: "generate-virtual-id",
        instruction: "generate-virtual-id-inst",
        input: "UIN",
        otpReq: true,
        path: "vid",
        action: "generate-virtual-id-action",
        request: "vidType",
        apiID: "mosip.resident.vid",
        icon: <AuthIcon />,
        image: 'generate.jpg',
        types: [
          'PERPETUAL',
          'TEMPORARY'
        ]
      },
      {
        id: 8,
        name: "revoke-virtual-id",
        instruction: "revoke-virtual-id-inst",
        input: "UIN",
        otpReq: true,
        path: "vid",
        action: "revoke-virtual-id-action",
        request: "vidStatus",
        apiID:"mosip.resident.vidstatus",
        icon: <SafetyIcon />,
        image: 'revoke.jpg',
        types: [
          'PERPETUAL',
          'TEMPORARY'
        ]
      },

    ]
  },
 
  
];
