import useSWR from "swr";
import OverviewCards from "./partials/Overview";


export default function Dashboard() {
  const { data } = useSWR("/dashboard-stats");

  console.log("Dashboard statistics", data)

  return (
    <div>
      <OverviewCards data={data?.data} />
    </div>
  )
}
