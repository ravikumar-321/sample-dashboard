import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";

export const sidebarItems = [
  {
    key: "1",
    text: "Dashboard",
    link: "#",
    icon: <AiOutlineDashboard size={20} />,
    submenu: false,
  },
  {
    key: "2",
    text: "Reports",
    link: "#",
    icon: <HiOutlineDocumentReport size={20} />,
    submenu: false,
  },
];
