import { Bell, FileInput, Map, MapPinned, MessageSquareText, Users, UsersRound, UsersRoundIcon } from "lucide-react";


export default function OverviewCards({data = {}}) {

  console.log("overview cards data", data)

  return (
    <>
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-8 p-8">
        {cards(data)?.map(({ label, icon, count, gradient, shadow }) => {
          return (
            <div
              key={label.replace(" ", "_")}
              className={`w-full p-5 flex items-center ${gradient} ${shadow} shadow-md rounded-lg text-white`}
            >
              <span className="p-5 rounded-full bg-white bg-opacity-[0.18]">
                {icon}
              </span>
              <p className="text-right w-full">
                <label
                  className={`font-bold block`}
                >
                  {count}
                </label>
                <label className="text-xl font-bold">{label}</label>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

const cards = ({
  applications,
  localities,
  notification,
  sectors,
  sms_balance,
  spc_members,
  staff,
  tsc_members,
}) => [
  {
    count: staff,
    label: "Total Staff",
    icon: <Users size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-rose-500 to-red-400",
    shadow: "shadow-rose-500/50",
  },
  {
    count: applications,
    label: "Received Applications",
    icon: <FileInput size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-400",
    shadow: "shadow-orange-500/50",
  },
  {
    count: sms_balance,
    label: "SMS Balance",
    icon: <MessageSquareText size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-teal-500 to-emerald-400",
    shadow: "shadow-teal-500/50",
  },
  {
    count: notification,
    label: "Pending Notifications",
    icon: <Bell size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-blue-500 to-sky-400",
    shadow: "shadow-blue-500/50",
  },
  {
    count: tsc_members,
    label: "TSC Members",
    icon: <UsersRoundIcon size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-pink-500 to-purple-400",
    shadow: "shadow-pink-500/50",
  },
  {
    count: spc_members,
    label: "SPC Members",
    icon: <UsersRound size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-indigo-500 to-sky-400",
    shadow: "shadow-indigo-500/50",
  },
  {
    count: localities,
    label: "Total Localities",
    icon: <Map size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-green-500 to-teal-400",
    shadow: "shadow-green-500/50",
  },
  {
    count: sectors,
    label: "Total Sectors",
    icon: <MapPinned size={40} className="opacity-50" />,
    gradient: "bg-gradient-to-r from-slate-500 to-slate-400",
    shadow: "shadow-slate-500/50",
  },
];
