import useSWR from "swr";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { columns } from "./partials/table/Columns";
import BaseTable from "@/components/TableComponent";
import DynamicUrl from "../../components/DynamicUrl";
import { TypographySm } from "@/components/Typography";
import AppActionButtons from "./partials/buttons";
import BatchAction from "./partials/BatchActions";
import { Button } from "@/components/ui/button";

const urlOptions = (changeData, table) => [
  {
    label: "Received",
    value: "received",
    action: { changeData, table },
  },
  {
    label: "Recommended",
    value: "recommended",
    action: { changeData, table },
  },
  {
    label: "Approved",
    value: "approved",
    action: { changeData, table },
  },
  {
    label: "Deferred",
    value: "deferred",
    action: { changeData, table },
  },
  // {
  //   label: "Rejected",
  //   value: "rejected",
  //   action: { changeData, table },
  // },
];

export default function Applications() {
  const [url, setUrl] = useSearchParams(), { data, isLoading } = useSWR(`/application?status=${url.get("status") ?? "received"}`),
    dispatch = useDispatch(), changePageData = (status) => setUrl(`status=${status}`);

    
  return (
    <>
      <BaseTable
        thead={{
          title: "Appliacations Management",
          btn: {
            show: false,
            btnComponent: isLoading ? (
              <Button variant="default">Loading...</Button>
            ) : (
              <AppActionButtons data={data.data.quarter} />
            ),
          },
          visibleColumns: {
            select: false,
          },
          component: (table) => (
            <ActionTab
              data={{
                changePageData,
                url: url.get("status") ?? "Received",
                table,
              }}
            />
          ),
          position: "start",
        }}
        selectedRows={{
          component: (rows) =>
            isLoading || !data?.data?.quarter ? (
              <></>
            ) : (
              <BatchAction rows={rows} data={data?.data} />
            ),
        }}
        data={data?.data?.quarter.applications ?? []}
        columns={columns(dispatch)}
        isLoading={isLoading}
      />
    </>
  );
}

const ActionTab = ({ data: { changePageData, url, table } }) => {

  return (
    <div className="flex items-center py-4">
      <div className="flex space-x-3 items-center">
        <div className="flex space-x-2 items-center border border-gray-200 dark:border-input pl-2 rounded-md">
          <TypographySm>Status</TypographySm>
          <DynamicUrl
            defaultValue={`${url}`}
            options={urlOptions(changePageData, table)}
            className="border-l"
          />
        </div>
        {/* <Filter table={table} /> */}
      </div>
    </div>
  );
};
