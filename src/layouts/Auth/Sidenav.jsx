import {
  FileInput,
  LayoutDashboard,
  Mailbox,
  Map,
  MessageSquareText,
  Package,
  Settings,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Links = [
  {
    url: "/dashboard",
    icon: <LayoutDashboard className="mr-3" />,
    name: "Dashboard",
  },
  {
    icon: <FileInput className="mr-3" />,
    name: "Applications",
    url: "/applications",
  },
  {
    url: "/committee-members",
    icon: <UsersRound className="mr-3" />,
    name: "Committee",
    match: "/committee-members",
  },
  {
    url: "/letters",
    icon: <Mailbox className="mr-3" />,
    name: "Letters",
  },
  {
    url: "/localities",
    icon: <Map className="mr-3" />,
    name: "Locality & Sectors",
  },
  {
    url: "/sms",
    icon: <MessageSquareText className="mr-3" />,
    name: "SMS",
  },
  {
    url: "/staff",
    icon: <Users className="mr-3" />,
    name: "Staff",
  },
  {
    url: "/quarters",
    icon: <Package className="mr-3" />,
    name: "Quarters",
  },
  {
    url: "/settings",
    icon: <Settings className="mr-3" />,
    name: "Settings",
  },
];

export default function SideNav() {
  const { pathname } = useLocation();

  return (
    <div className="h-full flex flex-col bg-white dark:bg-default border-r border-gray-50 dark:border-input">
      <div className="w-full flex items-center justify-center h-44">
        <UserRound size={50} className="" />
      </div>

      <ul className="relative z-20 w-full">
        {Links.map(({ url, name, icon }) => {
          return (
            <li className="" key={url}>
              <Link
                key={name}
                className={`w-full block my-1 p-2 rounded-md ${
                  url.startsWith(pathname)
                    ? "bg-active"
                    : "hover:bg-active-hover"
                }`}
                to={url}
              >
                <span className={`flex items-center pl-5`}>
                  {/* <Icon active={location.includes(url)} />  */}
                  {icon}
                  {name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
