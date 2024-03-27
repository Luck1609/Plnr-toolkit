import { useState } from "react";
import BaseTable from "@/components/TableComponent";
import { TypographySm } from "@/components/Typography";
import useSWR from "swr";
import DynamicUrl from "@/components/DynamicUrl";
import { columns } from "./partials/columns";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/lib/toolkit/reducers/modal";

const urlOptions = [
  {
    label: "TSC Committee",
    value: "tsc",
  },
  {
    label: "SPC Committee",
    value: "spc",
  },
];

export default function Committee() {
  const [params] = useState({ page: 1, panel: "tsc" }),
    { data, isLoading } = useSWR(`/committee-members/${params.panel}`), dispatch = useDispatch();


  const addMember = () => dispatch(toggleModal({
    title: "Add Committee Member",
    component: "committee",
    url: "/committee",
    mutation: "/committee",
    show: true,
    values: {
      firstname: "",
      lastname: "",
      panel: "",
      email: "",
      contact: "",
      role: "",
      designation: "",
    }
  }))

  return (
    <BaseTable
      // showDetailPanel={true}
      thead={{
        title: `${params.panel.toLocaleUpperCase()} Committee Management`,
        btn: {
          text: "Add Member",
          action: addMember,
        },
        component: ActionTab,
        position: "start"
      }}
      data={data?.data ?? []}
      columns={columns}
      isLoading={isLoading}
    />
  );
}


const ActionTab = () => {
  return (
    <div className="flex space-x-2 items-center border border-gray-200 dark:border-input pl-2 rounded-md">
      <TypographySm>Type</TypographySm>
      <DynamicUrl
        defaultValue="TSC Committee"
        options={urlOptions}
        className="border-l"
      />
    </div>
  )
}