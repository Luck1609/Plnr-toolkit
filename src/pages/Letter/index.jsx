import useSWR from "swr";
import BaseTable from "@/components/TableComponent";
import { columns } from "./partials/columns";

export default function Letters() {
  const { data, isLoading } = useSWR(`/sms`);


  return (
    <BaseTable
      // showDetailPanel={true}
      thead={{
        title: "Letter Management",
        btn: {
          text: "Draft letter",
          action: () => {},
        }
      }}
      data={data?.data ?? []}
      columns={columns}
      isLoading={isLoading}
    />
  );
}
