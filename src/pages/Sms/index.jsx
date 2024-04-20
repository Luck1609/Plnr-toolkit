import useSWR from "swr";
import { useDispatch } from "react-redux";
import BaseTable from "@/components/TableComponent";
import { columns } from "./partials/columns";
import { toggleModal } from "@/lib/toolkit/reducers/modal";

export default function Sms() {
  const { data, isLoading } = useSWR(`/sms`), dispatch = useDispatch();

  const newSMS = () =>
    dispatch(
      toggleModal({
        show: true,
        title: "Send SMS",
        component: "sms",
        mutation: "/sms",
        url: "/sms",
        values: {
          contacts: null,
          message: "",
          imported: false
        },
      })
    );

  return (
    <>
      <BaseTable
        thead={{
          title: "SMS Management",
          btn: {
            text: "New message",
            action: newSMS,
          },
        }}
        data={data?.data ?? []}
        columns={columns}
        isLoading={isLoading}
      />
    </>
  );
}
