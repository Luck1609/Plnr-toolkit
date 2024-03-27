import useSWR from "swr";
import BaseTable from "@/components/TableComponent";
import { columns } from "./partials/columns";

export default function Sms() {
  const { data, isLoading } = useSWR(`/sms`);


  return (
    <BaseTable
      // showDetailPanel={true}
      thead={{
        title: "SMS Management",
        btn: {
          text: "New message",
          action: () => {},
        },
      }}
      data={data?.data ?? []}
      columns={columns}
      isLoading={isLoading}
    />
  );
}
