import useSWR from "swr";
import BaseTable from "@/components/TableComponent";
import { columns } from "./partials/columns";


export default function Quarter() {
  const { data, isLoading } = useSWR("/quarter");


  return (
    <BaseTable
      data={data?.data ?? []}
      columns={columns}
      thead={{
        title: "Session Management",
        btn: {
          text: "Draft letter",
          action: () => {},
          show: false
        },
      }}
      isLoading={isLoading}
    />
  );
}
