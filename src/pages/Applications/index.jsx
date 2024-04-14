import useSWR from "swr";
import { useDispatch } from "react-redux";
import { columns } from "./partials/table/Columns";
import BaseTable from "@/components/TableComponent";
import DynamicUrl from "../../components/DynamicUrl";
import { TypographySm } from "@/components/Typography";
import AppActionButtons from "./partials/buttons";


const urlOptions = [
  {
    label: "Received",
    value: "received",
  },
  {
    label: "Recommended",
    value: "recommended",
  },
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Deferred",
    value: "deferred",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

export default function Applications() {
  const {data: quarter, isLoading: quarterLoading} = useSWR("/current-quarter"), {data, isLoading} = useSWR("/application"), dispatch = useDispatch();


  // console.log("Quarter info", quarterLoading, "data =>", quarter)

  return (
    <BaseTable
      // showDetailPanel={true}
      thead={{
        title: "Appliacations Management",
        btn: {show: false, btnComponent: <AppActionButtons isLoading={isLoading || quarterLoading} quarter={quarter?.data} applications={data?.data} />},
        component: ActionTab,
        position: "start"
      }}
      data={data?.data ?? []}
      columns={columns(dispatch)}
      isLoading={isLoading}
    />
  );
}


const ActionTab = () => {
  return (
    <div className="flex items-center py-4">
      <div className="flex space-x-3 items-center">
        <div className="flex space-x-2 items-center border border-gray-200 dark:border-input pl-2 rounded-md">
          <TypographySm>Status</TypographySm>
          <DynamicUrl
            defaultValue="Received"
            options={urlOptions}
            className="border-l"
          />
        </div>
        {/* <Filter table={table} /> */}
      </div>
    </div>
  )
}