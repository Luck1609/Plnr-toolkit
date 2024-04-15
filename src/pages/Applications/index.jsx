import useSWR from "swr";
import { useDispatch } from "react-redux";
import { columns } from "./partials/table/Columns";
import BaseTable from "@/components/TableComponent";
import DynamicUrl from "../../components/DynamicUrl";
import { TypographySm } from "@/components/Typography";
import AppActionButtons from "./partials/buttons";
import BatchAction from "./partials/BatchAction";
import Meeting from "@/widgets/Meeting";
// import TablePrint from "@/components/TableComponent/TablePrint";

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
  const { data, isLoading } = useSWR("/application"),
    dispatch = useDispatch();

  return (
    <>
      <BaseTable
        thead={{
          title: "Appliacations Management",
          btn: {
            show: false,
            btnComponent: (
              <AppActionButtons
                isLoading={isLoading}
                quarter={data?.data}
                applications={data?.data?.applications}
              />
            ),
          },
          component: ActionTab,
          position: "start",
        }}
        selectedRows={{
          component: (rows) =>
            isLoading || !data?.data?.id ? (
              <></>
            ) : (
              <BatchAction rows={rows} data={data?.data} />
            ),
        }}
        data={data?.data?.applications ?? []}
        columns={columns(dispatch)}
        isLoading={isLoading}
      />

    </>
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
  );
};
